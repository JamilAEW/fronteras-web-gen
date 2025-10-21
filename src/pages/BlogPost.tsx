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
import { Dialog, DialogContent } from '@/components/ui/dialog';
import StickyForm from '@/components/StickyForm';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useEffect, useState } from 'react';

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
const BlogPost = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const {
    ref: headerRef,
    isVisible: headerVisible
  } = useScrollAnimation();
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation();
  const [tableOfContents, setTableOfContents] = useState<{
    text: string;
    id: string;
    level: number;
  }[]>([]);
  const [processedContent, setProcessedContent] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Si no existe el post, redirigir a 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Generar tabla de contenidos (índice) y procesar contenido con IDs
  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.contenido;
    const headings = tempDiv.querySelectorAll('h2, h3');
    const toc = Array.from(headings).map((heading, index) => {
      const id = `section-${index}`;
      heading.id = id; // Aplicar ID al heading
      return {
        text: heading.textContent || '',
        id,
        level: heading.tagName === 'H2' ? 2 : 3
      };
    });
    setTableOfContents(toc);
    setProcessedContent(tempDiv.innerHTML); // Guardar HTML procesado con IDs
  }, [post.contenido]);

  // Función para scroll suave al hacer clic en el índice
  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Espacio desde el top
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Colores del badge según categoría
  const badgeColor = post.categoria === 'visado' ? 'border-brand-yellow text-brand-yellow' : post.categoria === 'arraigo' ? 'border-brand-red text-brand-red' : 'border-brand-blue text-brand-blue';
  const categoryLabel = post.categoria === 'visado' ? 'Visado / Estancia' : post.categoria === 'arraigo' ? 'Arraigo Socioformativo' : 'General';
  return <div className="min-h-screen bg-background">
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
        <header ref={headerRef as React.RefObject<HTMLElement>} className={`bg-gradient-to-br from-primary to-brand-900 text-white py-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
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

        {/* Contenido del post */}
        <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ${contentVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda: Imagen + Índice */}
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Imagen destacada - Half Width */}
              {post.imagen && (
                <div className="w-full">
                  <img 
                    src={post.imagen} 
                    alt={post.titulo}
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              )}

              {/* Índice de contenidos */}
              {tableOfContents.length > 0 && (
                <div className="bg-gradient-to-br from-brand-50 to-white border-l-4 border-primary rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-display font-bold mb-4 text-foreground flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Índice
                  </h2>
                  <nav>
                    <ul className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <li key={item.id} className={`${item.level === 3 ? 'ml-6' : ''}`}>
                          <a 
                            href={`#${item.id}`} 
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={`${
                              item.level === 2 
                                ? 'text-sm font-semibold text-foreground' 
                                : 'text-xs text-muted-foreground'
                            } hover:text-primary transition-colors hover:underline flex items-start gap-2 group`}
                          >
                            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                              {item.level === 2 ? '▸' : '•'}
                            </span>
                            <span className="flex-1">
                              {item.level === 2 && `${index + 1}. `}{item.text}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}
            </div>

            {/* Columna derecha: Contenido principal */}
            <div className="space-y-12">
              {/* Opening - Resumen destacado */}
              <div className="bg-gradient-to-r from-primary/5 to-brand-900/5 border-l-4 border-primary p-8 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Lo que aprenderás</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      {post.resumen}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido principal */}
              <div className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:text-foreground prose-headings:scroll-mt-24
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:font-bold prose-h2:border-b prose-h2:border-primary/20
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-semibold prose-h3:text-primary
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
                prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-brand-900
                prose-strong:text-foreground prose-strong:font-bold
                prose-ul:my-4 prose-ul:text-muted-foreground prose-ul:space-y-1
                prose-ol:my-4 prose-ol:text-muted-foreground prose-ol:space-y-1
                prose-li:my-1 prose-li:leading-relaxed
                prose-table:w-full prose-table:border-collapse prose-table:my-6 prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden
                prose-thead:bg-gradient-to-r prose-thead:from-primary prose-thead:to-brand-900
                prose-th:bg-transparent prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:text-left prose-th:text-sm
                prose-td:text-muted-foreground prose-td:p-3 prose-td:border-t prose-td:border-border prose-td:text-sm
                prose-tr:transition-colors hover:prose-tr:bg-brand-50/50
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-brand-50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:my-4 prose-blockquote:rounded-r-lg
                prose-code:text-primary prose-code:bg-brand-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-img:rounded-lg prose-img:shadow-md prose-img:my-6" 
                dangerouslySetInnerHTML={{
                  __html: processedContent
                }} 
              />

              {/* CTA intermedio */}
              <div className="my-12 bg-gradient-to-r from-primary/10 via-brand-900/10 to-primary/10 border border-primary/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                  ¿Necesitas asesoramiento personalizado?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Nuestro equipo de expertos está listo para ayudarte con tu proceso. Agenda una consulta gratuita.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                  onClick={() => setIsFormOpen(true)}
                >
                  Solicitar información
                </Button>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="pt-8 border-t border-border">
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

              {/* CTA final */}
              <div className="mt-12 bg-gradient-to-br from-primary via-brand-900 to-primary text-white rounded-2xl p-10 text-center shadow-xl relative overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-4">
                    ¿Listo para dar el siguiente paso?
                  </h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                    Contáctanos hoy y descubre cómo nuestros cursos pueden ayudarte a alcanzar tus objetivos en España.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setIsFormOpen(true)}
                  >
                    Contactar ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Formulario popup */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <StickyForm />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>;
};
export default BlogPost;