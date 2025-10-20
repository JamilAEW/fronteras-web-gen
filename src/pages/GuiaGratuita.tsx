// ==========================================
// PÁGINA: Guía Gratuita (Blog)
// ==========================================
// Muestra todas las entradas del blog en formato de tarjetas
// Con filtros por categoría (todos, visado, arraigo, general)

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts, BlogPost } from '@/data/blog';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
const GuiaGratuita = () => {
  // ========================================
  // ESTADO Y ANIMACIONES
  // ========================================
  const [selectedCategory, setSelectedCategory] = useState<'todos' | BlogPost['categoria']>('todos');
  
  // Refs para animaciones de scroll
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: filterRef, isVisible: filterVisible } = useScrollAnimation();
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation();

  // ========================================
  // FILTRADO DE POSTS
  // ========================================
  const filteredPosts = selectedCategory === 'todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.categoria === selectedCategory);

  // ========================================
  // BOTONES DE FILTRO
  // ========================================
  const filterButtons = [
    { id: 'todos' as const, label: 'Todos los artículos' },
    { id: 'visado' as const, label: 'Visado / Estancia' },
    { id: 'arraigo' as const, label: 'Arraigo Socioformativo' },
    { id: 'general' as const, label: 'General' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ========================================
          SEO - Meta tags
          ======================================== */}
      <Helmet>
        <title>Guía Gratuita - Educar Sin Fronteras</title>
        <meta 
          name="description" 
          content="Guías y artículos gratuitos sobre visados, arraigo socioformativo, y formación en España. Información actualizada para tu proceso de regularización." 
        />
        <meta name="keywords" content="guía gratuita, visado España, arraigo socioformativo, formación oficial, blog educación" />
      </Helmet>

      {/* ========================================
          NAVEGACIÓN
          ======================================== */}
      <Navbar />

      {/* ========================================
          HERO - Encabezado principal
          ========================================
          MODIFICAR:
          - Colores: bg-gradient-to-br from-[COLOR] to-[COLOR]
          - Textos: Editar directamente las líneas
          - Espaciado: py-20
      */}
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

      {/* ========================================
          INTRODUCCIÓN
          ========================================
          MODIFICAR CONTENIDO:
          - Editar directamente el texto en línea 103
      */}
      <section 
        ref={introRef as React.RefObject<HTMLElement>}
        className={`py-16 bg-background transition-all duration-1000 ${
          introVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            En nuestra Guía Gratuita encontrarás toda la información que necesitas sobre visados, 
            arraigo socioformativo, formación oficial y mucho más. Artículos actualizados y escritos 
            por nuestro equipo de expertos para ayudarte en cada paso de tu proceso.
          </p>
        </div>
      </section>

      {/* ========================================
          FILTROS DE CATEGORÍA
          ========================================
          MODIFICAR:
          - Botones: Editar array filterButtons (línea 37)
          - Colores activo: bg-primary text-primary-foreground
          - Colores inactivo: bg-secondary text-secondary-foreground
      */}
      <section 
        ref={filterRef as React.RefObject<HTMLElement>}
        className={`py-12 bg-brand-50 transition-all duration-1000 ${
          filterVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setSelectedCategory(button.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === button.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          GRID DE ARTÍCULOS
          ========================================
          MODIFICAR:
          - Columnas: md:grid-cols-2 lg:grid-cols-3
          - Espaciado: gap-6
          - Mensaje "no encontrado": línea 166
      */}
      <section 
        ref={postsRef as React.RefObject<HTMLElement>}
        className={`py-20 bg-background transition-all duration-1000 ${
          postsVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No se encontraron artículos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================
          PIE DE PÁGINA
          ======================================== */}
      <Footer />
    </div>
  );
};

export default GuiaGratuita;
