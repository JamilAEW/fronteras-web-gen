import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { courses, Category } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: filterRef, isVisible: filterVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Todos los Cursos | Educar Sin Fronteras</title>
        <meta 
          name="description" 
          content="Encuentra las titulaciones que se adapten mejor a ti. 100% oficial. Estudia con la máxima flexibilidad." 
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-brand-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl px-8 md:px-16 py-12 md:py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Catálogo de Cursos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Encuentra las titulaciones que se adapten mejor a ti. 100% oficial. Estudia con la máxima flexibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section 
        ref={introRef as React.RefObject<HTMLElement>}
        className={`py-16 bg-background transition-all duration-1000 ${
          introVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              En <strong>Educar Sin Fronteras</strong>, nos comprometemos a ofrecer una educación de calidad que te prepare para los desafíos del mundo laboral actual. Nuestros programas están diseñados para proporcionarte las competencias y conocimientos especializados que demandan las empresas líderes en diversos sectores.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section 
        ref={filterRef as React.RefObject<HTMLElement>}
        className={`py-8 bg-secondary/30 transition-all duration-1000 ${
          filterVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="rounded-full"
            >
              All Courses
            </Button>
            <Button
              variant={selectedCategory === 'visa-stay' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('visa-stay')}
              className="rounded-full"
            >
              Visa / Stay
            </Button>
            <Button
              variant={selectedCategory === 'rootedness' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('rootedness')}
              className="rounded-full"
            >
              Socio-formative Rootedness
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section 
        ref={gridRef as React.RefObject<HTMLElement>}
        className={`py-16 bg-background transition-all duration-1000 ${
          gridVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((curso) => (
              <CourseCard key={curso.slug} curso={curso} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron cursos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cursos;
