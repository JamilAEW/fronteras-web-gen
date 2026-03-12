import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { GlobeIcon, BriefcaseIcon, GraduationCapIcon, FileTextIcon, ShieldCheckIcon, HeartHandshakeIcon } from 'lucide-react';

const topicCards = [
  { icon: GlobeIcon, title: 'Visados y Estancia', description: 'Todo sobre cómo estudiar y residir legalmente en España.' },
  { icon: GraduationCapIcon, title: 'Formación Oficial', description: 'Cursos certificados que abren puertas profesionales.' },
  { icon: BriefcaseIcon, title: 'Empleo en España', description: 'Cómo acceder al mercado laboral con tu formación.' },
  { icon: FileTextIcon, title: 'Trámites y Documentos', description: 'Guías prácticas para cada paso burocrático.' },
  { icon: ShieldCheckIcon, title: 'Arraigo Socioformativo', description: 'La vía legal para regularizarte mediante formación.' },
  { icon: HeartHandshakeIcon, title: 'Asesoramiento', description: 'Acompañamiento personalizado en todo tu proceso.' },
];

const GuiaGratuita = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation();
  const { ref: topicsRef, isVisible: topicsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Guía Gratuita - Educar Sin Fronteras</title>
        <meta 
          name="description" 
          content="Guías y artículos gratuitos sobre visados, arraigo socioformativo, y formación en España. Información actualizada para tu proceso de regularización." 
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section 
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`bg-gradient-to-br from-primary to-brand-900 text-white py-20 transition-all duration-1000 ${
          heroVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Guía Gratuita
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Recursos, guías y artículos gratuitos para ayudarte en tu proceso
          </p>
        </div>
      </section>

      {/* Artículo destacado */}
      <section 
        ref={postsRef as React.RefObject<HTMLElement>}
        className={`py-20 bg-background transition-all duration-1000 ${
          postsVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-foreground">Artículo destacado</h2>
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Topic Cards */}
      <section 
        ref={topicsRef as React.RefObject<HTMLElement>}
        className={`py-20 bg-muted/30 transition-all duration-1000 ${
          topicsVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-foreground">
            Temas que cubrimos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Próximamente más artículos sobre estos temas
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((topic) => (
              <div 
                key={topic.title}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                  <topic.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuiaGratuita;
