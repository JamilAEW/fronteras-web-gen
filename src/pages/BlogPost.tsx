// ==========================================
// PÁGINA: Post Individual del Blog
// ==========================================
// Muestra el contenido completo de un artículo del blog

import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useEffect, useState } from 'react';

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [tableOfContents, setTableOfContents] = useState<{text: string, id: string, level: number}[]>([]);

  // Si no existe el post, redirigir a 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Generar tabla de contenidos (índice) desde los H2 y H3
  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.contenido;
    
    const headings = tempDiv.querySelectorAll('h2, h3');
    const toc = Array.from(headings).map((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      return {
        text: heading.textContent || '',
        id,
        level: heading.tagName === 'H2' ? 2 : 3
      };
    });
    
    setTableOfContents(toc);
  }, [post.contenido]);

  // Colores del badge según categoría
  const badgeColor =
    post.categoria === 'visado'
      ? 'border-brand-yellow text-brand-yellow'
      : post.categoria === 'arraigo'
      ? 'border-brand-red text-brand-red'
      : 'border-brand-blue text-brand-blue';

  const categoryLabel =
    post.categoria === 'visado'
      ? 'Visado / Estancia'
      : post.categoria === 'arraigo'
      ? 'Arraigo Socioformativo'
      : 'General';

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta tags */}
      <Helmet>
        <title>{post.titulo} - Educar Sin Fronteras</title>
        <meta name="description" content={post.resumen} />
        <meta name="keywords" content={post.tags?.join(', ')} />
        <meta property="og:title" content={post.titulo} />
        <meta property="og:description" content={post.resumen} />
        {post.imagen && <meta property="og:image" content={post.imagen} />}
      </Helmet>

      <Navbar />

      {/* Header del post */}
      <article>
        <header 
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`bg-gradient-to-br from-primary to-brand-900 text-white py-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`}
        >
          <div className="max-w-4xl mx-auto px-4">
            {/* Botón volver */}
            <Link to="/guia-gratuita">
              <Button variant="outline" size="sm" className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Guía Gratuita
              </Button>
            </Link>

            {/* Categoría badge */}
            <Badge variant="outline" className={`mb-4 ${badgeColor} bg-transparent`}>
              {categoryLabel}
            </Badge>

            {/* Título */}
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              {post.titulo}
            </h1>

            {/* Meta información */}
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.fecha).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.autor}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Imagen destacada */}
        {post.imagen && (
          <div className="max-w-4xl mx-auto px-4 -mt-12">
            <img 
              src={post.imagen} 
              alt={post.titulo}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        )}

        {/* Contenido del post */}
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto px-4 py-16 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`}
        >
          {/* Índice de contenidos */}
          {tableOfContents.length > 0 && (
            <div className="bg-brand-50 border border-border rounded-lg p-6 mb-12">
              <h2 className="text-xl font-display font-bold mb-4 text-foreground">
                Índice de contenidos
              </h2>
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li 
                      key={item.id}
                      className={item.level === 3 ? 'ml-6' : ''}
                    >
                      <a 
                        href={`#${item.id}`}
                        className="text-primary hover:text-brand-900 transition-colors hover:underline"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Resumen destacado */}
          <div className="bg-brand-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg text-foreground leading-relaxed italic">
              {post.resumen}
            </p>
          </div>

          {/* Contenido HTML */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:text-muted-foreground
              prose-li:my-2
              prose-table:w-full prose-table:border-collapse
              prose-th:bg-brand-50 prose-th:text-foreground prose-th:font-semibold
              prose-td:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.contenido }}
          />

          {/* CTA final */}
          <div className="mt-16 bg-gradient-to-br from-primary to-brand-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo nuestros cursos pueden ayudarte a alcanzar tus objetivos en España.
            </p>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Contactar ahora
              </Button>
            </Link>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                Etiquetas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
