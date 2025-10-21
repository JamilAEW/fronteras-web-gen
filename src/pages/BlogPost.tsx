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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StickyForm from '@/components/StickyForm';
import whatsappQR from '@/assets/whatsapp-qr.png';
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
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);

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
                              {item.level === 2 && <span className="font-bold">{index + 1}. </span>}{item.text}
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
                prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-primary/20
                prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:font-semibold prose-h3:text-primary
                prose-p:text-foreground prose-p:leading-loose prose-p:mb-10 prose-p:text-lg prose-p:text-left
                prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-brand-900
                prose-strong:text-foreground prose-strong:font-bold
                prose-em:text-foreground prose-em:italic prose-em:font-normal
                prose-ul:my-10 prose-ul:text-foreground prose-ul:space-y-4 prose-ul:leading-loose prose-ul:text-lg
                prose-ol:my-10 prose-ol:text-foreground prose-ol:space-y-4 prose-ol:leading-loose prose-ol:text-lg
                prose-li:my-3 prose-li:leading-loose prose-li:text-left
                prose-table:w-full prose-table:border-collapse prose-table:my-12 prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden
                prose-thead:bg-gradient-to-r prose-thead:from-primary prose-thead:to-brand-900
                prose-th:bg-transparent prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-th:text-left prose-th:text-base
                prose-td:text-foreground prose-td:p-4 prose-td:border-t prose-td:border-border prose-td:text-base prose-td:leading-loose
                prose-tr:transition-colors hover:prose-tr:bg-brand-50/50
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-brand-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:my-12 prose-blockquote:rounded-r-lg prose-blockquote:text-lg prose-blockquote:leading-loose
                prose-code:text-primary prose-code:bg-brand-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-code:font-medium
                prose-img:rounded-lg prose-img:shadow-md prose-img:my-12"
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
                    onClick={() => setIsWhatsAppDialogOpen(true)}
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

      {/* WhatsApp QR Dialog */}
      <Dialog open={isWhatsAppDialogOpen} onOpenChange={setIsWhatsAppDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              ¡Escanea nuestro QR!
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            <img 
              src={whatsappQR} 
              alt="WhatsApp QR Code" 
              className="w-64 h-64 rounded-lg shadow-lg"
            />
            <p className="text-center text-lg font-medium">
              Escanea nuestro QR y habla con una asesora en este momento!
            </p>
            <Button 
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a 
                href="https://wa.me/34640024913" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Abrir WhatsApp
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>;
};
export default BlogPost;