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
            {/* Columna izquierda: Contenido principal */}
            <div className="space-y-12 lg:order-1" id="contenido-estudios-espana">
              <style dangerouslySetInnerHTML={{__html: `
                /* ====== Estilos embebidos para legibilidad (tema claro) ====== */
                #contenido-estudios-espana {
                  --bg: #ffffff;
                  --ink: #0B1220;
                  --muted: #556070;
                  --brand: #8243D9;
                  --accent: #EDE7FB;
                  --line: #E9EEF4;
                  --radius: 14px;
                  --maxw: 860px;
                  background: var(--bg);
                  color: var(--ink);
                  font: 16px/1.7 system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
                }

                #contenido-estudios-espana .wrap {
                  max-width: var(--maxw);
                  margin: 0 auto;
                  padding: 24px 20px 10px;
                }

                #contenido-estudios-espana .eyebrow {
                  font-size: 13px;
                  letter-spacing: .12em;
                  text-transform: uppercase;
                  color: var(--muted);
                  margin-bottom: 6px;
                }

                #contenido-estudios-espana h1, 
                #contenido-estudios-espana h2, 
                #contenido-estudios-espana h3 {
                  line-height: 1.25;
                  margin: 12px 0 14px;
                  font-weight: 800;
                }

                #contenido-estudios-espana h1 { font-size: 32px; letter-spacing: -0.02em; }
                #contenido-estudios-espana h2 { font-size: 24px; margin-top: 36px; border-top: 1px solid var(--line); padding-top: 18px; }
                #contenido-estudios-espana h3 { font-size: 18px; margin-top: 26px; color: var(--ink); }

                #contenido-estudios-espana p { margin: 10px 0 14px; }

                #contenido-estudios-espana strong { font-weight: 700; }

                #contenido-estudios-espana ul, 
                #contenido-estudios-espana ol { margin: 10px 0 16px 1.2rem; }
                #contenido-estudios-espana li { margin: 6px 0; }

                #contenido-estudios-espana .callout {
                  border: 1px solid var(--line);
                  background: var(--accent);
                  border-radius: var(--radius);
                  padding: 14px 16px;
                  margin: 18px 0;
                }
                #contenido-estudios-espana .callout b { color: var(--brand); }

                #contenido-estudios-espana figure {
                  margin: 18px 0 22px;
                  display: block;
                  border-radius: var(--radius);
                  overflow: hidden;
                  border: 1px solid var(--line);
                  background: #fafafa;
                }
                #contenido-estudios-espana figure img {
                  width: 100%;
                  height: auto;
                  display: block;
                }
                #contenido-estudios-espana figcaption {
                  font-size: 12.5px;
                  color: var(--muted);
                  padding: 8px 12px;
                  background: #fff;
                }
                #contenido-estudios-espana figcaption a { color: var(--muted); text-decoration: underline; }

                #contenido-estudios-espana .checklist { list-style: none; margin-left: 0; padding-left: 0; }
                #contenido-estudios-espana .checklist li {
                  padding-left: 30px;
                  position: relative;
                  margin: 8px 0;
                }
                #contenido-estudios-espana .checklist li::before {
                  content: "✔";
                  position: absolute;
                  left: 8px;
                  top: 0;
                  color: #10B981;
                  font-weight: 900;
                }

                #contenido-estudios-espana .table-wrap {
                  overflow: auto;
                  border: 1px solid var(--line);
                  border-radius: var(--radius);
                  margin: 14px 0 20px;
                }
                #contenido-estudios-espana table {
                  width: 100%;
                  border-collapse: collapse;
                  min-width: 640px;
                  background: #fff;
                  table-layout: fixed;
                }
                #contenido-estudios-espana thead th {
                  text-align: left;
                  font-size: 14px;
                  color: var(--muted);
                  background: #F8FAFC;
                  border-bottom: 1px solid var(--line);
                  padding: 10px 12px;
                  position: sticky; 
                  top: 0;
                  white-space: normal;
                  word-wrap: break-word;
                  overflow-wrap: break-word;
                }
                #contenido-estudios-espana td { 
                  padding: 12px; 
                  border-bottom: 1px solid var(--line); 
                  vertical-align: top;
                  white-space: normal;
                  word-wrap: break-word;
                  overflow-wrap: break-word;
                }
                #contenido-estudios-espana tbody tr:hover { background: #FCFCFD; }

                #contenido-estudios-espana .tag {
                  display: inline-block;
                  font-size: 12px;
                  padding: 4px 8px;
                  border-radius: 999px;
                  background: #F1EBFF;
                  color: var(--brand);
                  border: 1px solid var(--line);
                  margin-right: 6px;
                }

                #contenido-estudios-espana .sep { 
                  height: 1px; 
                  background: var(--line); 
                  margin: 24px 0; 
                }
              `}} />
              
              <div className="wrap" dangerouslySetInnerHTML={{__html: `
                <div class="eyebrow">Guía 2025 · Estancia por estudios en España</div>
                <h1 id="por-que-espana">¿Por qué España es una opción ideal para estudiar y trabajar?</h1>

                <figure>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Estudiantes internacionales en un campus en España">
                  <figcaption>Foto libre: Unsplash — Vida universitaria en España.</figcaption>
                </figure>

                <p>Mientras muchos países endurecen los visados para estudiantes — <strong>duraciones largas de espera</strong>, <strong>restricciones para trabajar</strong>, <strong>cargas familiares</strong> — <strong>España</strong> se sitúa como una alternativa <strong>accesible, flexible</strong> y con <strong>buenas oportunidades</strong>.</p>

                <div class="callout">
                  <b>Aquí algunos puntos clave:</b>
                  <ul>
                    <li><strong>Educación de calidad</strong> con matrícula en universidades, centros oficiales y certificados profesionales.</li>
                    <li><strong>Reformas normativas recientes</strong> que facilitan la estancia por estudios y permiten trabajar y luego cambiar a permiso de trabajo.</li>
                    <li><strong>Cultura, idioma, clima y entorno</strong> favorables para estudiantes internacionales.</li>
                  </ul>
                </div>

                <div class="sep"></div>

                <h2 id="claves-2025">Las 10 claves que necesitas conocer (y cómo se aplican en 2025)</h2>
                <p>Tomando como base las "10 Claves de la Estancia por Estudios", aquí tienes una versión <strong>adaptada y actualizada</strong>:</p>

                <figure>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop" alt="Estudiante organizando documentos para visado en España">
                  <figcaption>Unsplash — Organización de documentos y matrícula.</figcaption>
                </figure>

                <h3 id="formacion-valida">2.1 Formación válida para visado</h3>
                <p>Se requiere una <strong>formación completa</strong>: grado, máster, doctorado, FP de segundo grado, certificación profesional o título técnico.</p>
                <p><strong>Aplicación a tus cursos:</strong> Todos los programas de <strong>Educar Sin Fronteras</strong> — visado/estancia o <em>arraigo socioformativo</em> — <strong>son acreditados</strong> y cumplen con esta clave.</p>

                <h3 id="matricula-completa">2.2 Matrícula a tiempo completo</h3>
                <p>Tu curso debe ser <strong>a tiempo completo</strong> (no bastan unas horas semanales). Nuestros módulos están diseñados como programas intensivos, <strong>compatibles con visado/estancia</strong>.</p>

                <h3 id="modalidad">2.3 Modalidad presencial o semipresencial</h3>
                <p>Ahora se acepta modalidad semipresencial siempre que <strong>al menos el 50&nbsp;%</strong> de las clases sean presenciales. Nuestros cursos "mixtos" están diseñados para <strong>cumplir esta norma</strong>.</p>

                <h3 id="medios-economicos">2.4 Acreditación de medios económicos</h3>
                <p>Debes demostrar que dispones de <strong>medios económicos</strong> (habitualmente <strong>100&nbsp;% del IPREM</strong> al mes). Desde 2025, esa cantidad se ha actualizado; te ayudamos a <strong>calcularla</strong> en nuestro asesoramiento.</p>

                <h3 id="seguro-medico">2.5 Seguro médico</h3>
                <p><strong>Seguro privado o público válido en España</strong>, sin copago, con repatriación. Lo incluimos como servicio adicional para estudiantes de fuera de la UE.</p>

                <h3 id="lugar-solicitud">2.6 Lugar de solicitud</h3>
                <ul>
                  <li>En un <strong>Consulado de España</strong> en tu país.</li>
                  <li>O <strong>en España</strong>, si ya estás legalmente y cumples los criterios (por ejemplo visado turístico). Este segundo camino es interesante para muchos estudiantes.</li>
                </ul>

                <h3 id="estancia-6m">2.7 Estancia superior a 6 meses</h3>
                <p>Si tu curso es superior a 6 meses, necesitarás además <strong>certificado de antecedentes penales</strong> y <strong>certificado médico</strong>. Nuestros cursos <strong>tienen entre 200 y 750 horas</strong> (varios meses) y te preparamos para esta fase.</p>

                <h3 id="familiar">2.8 Familiar acompañante</h3>
                <p>En algunos casos, los <strong>hijos menores o cónyuges</strong> pueden acompañar al estudiante si el curso es superior y se cumplen otros requisitos. Esto puede aplicar en visado de estudios; <strong>te asesoramos</strong> sobre tu caso concreto.</p>

                <h3 id="reglamento">2.9 Nuevo reglamento y ventajas laborales</h3>
                <p>El reglamento más reciente (2025) permite <strong>mayor flexibilidad</strong>, <strong>integración laboral</strong>, <strong>trabajo durante estudios</strong> y <strong>vías para residir</strong> tras los estudios.</p>

                <h3 id="asesoria">2.10 Asesoría profesional</h3>
                <p>Es clave contar con <strong>asesoramiento experto</strong> para evitar errores, denegaciones o trámites largos. Nuestro equipo en <strong>Educar Sin Fronteras</strong> ofrece este acompañamiento.</p>

                <figure>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop" alt="Estudiante trabajando con portátil en biblioteca">
                  <figcaption>Unsplash — Estudiar y trabajar: compatibilidad y organización.</figcaption>
                </figure>

                <h2 id="beneficios">Beneficios concretos del visado de estudios + posibilidad de trabajar</h2>
                <ul class="checklist">
                  <li><strong>Estudiar y trabajar:</strong> puedes trabajar hasta <strong>20 horas semanales</strong> mientras estudias (según normativa vigente).</li>
                  <li><strong>Quedarte a trabajar después:</strong> existen vías legales para <strong>cambiar de visado de estudiante a permiso de residencia y trabajo</strong>.</li>
                  <li><strong>Formación certificada:</strong> nuestros cursos cumplen con certificaciones oficiales (<strong>EUNEIZ, Comunidad de Madrid, SEPE</strong>).</li>
                </ul>

                <figure>
                  <img loading="lazy" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGh0cXZnY2xvdXU5Y3g0bXJ1a3A3cGx3N2xubHNxN3ZpZzJmMHh6OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13HgwGsXF0aiGY/giphy.gif" alt="GIF motivacional de logros académicos">
                  <figcaption>GIF: GIPHY — Motivación para alcanzar objetivos académicos y laborales.</figcaption>
                </figure>

                <h2 id="requisitos">Requisitos paso a paso para la solicitud</h2>
                <div class="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Paso</th>
                        <th>Qué necesitas</th>
                        <th>Comentarios</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span class="tag">1</span></td>
                        <td><strong>Carta de admisión</strong> de un centro oficial</td>
                        <td>Nosotros emitimos carta para tus cursos.</td>
                      </tr>
                      <tr>
                        <td><span class="tag">2</span></td>
                        <td><strong>Pasaporte válido</strong></td>
                        <td>Mínimo <strong>12 meses</strong> recomendados.</td>
                      </tr>
                      <tr>
                        <td><span class="tag">3</span></td>
                        <td><strong>Medios económicos</strong></td>
                        <td><strong>100&nbsp;% del IPREM/mes</strong>, o menos si acreditas alojamiento.</td>
                      </tr>
                      <tr>
                        <td><span class="tag">4</span></td>
                        <td><strong>Seguro médico español</strong></td>
                        <td>Incluido como servicio adicional.</td>
                      </tr>
                      <tr>
                        <td><span class="tag">5</span></td>
                        <td><strong>Certificado de antecedentes penales</strong></td>
                        <td>Para estancias &gt; 6 meses.</td>
                      </tr>
                      <tr>
                        <td><span class="tag">6</span></td>
                        <td><strong>Certificado médico</strong></td>
                        <td>General.</td>
                      </tr>
                      <tr>
                        <td><span class="tag">7</span></td>
                        <td><strong>Pago de tasas</strong></td>
                        <td>Alrededor de <strong>60&nbsp;€</strong> (varía por país).</td>
                      </tr>
                      <tr>
                        <td><span class="tag">8</span></td>
                        <td><strong>Presentación del trámite</strong></td>
                        <td>Consulado o en España (según caso).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="preparacion-cursos">Cómo nuestros cursos te preparan para todo esto</h2>
                <ul>
                  <li><strong>Formación oficial y actualizada</strong> para visado/estancia y arraigo.</li>
                  <li><strong>Asesoramiento</strong> para visado y trámite (documentación, plazos, traducción).</li>
                  <li><strong>Calendarios adaptados</strong>, horarios de fin de semana o mixtos.</li>
                  <li><strong>Financiación</strong> sin intereses, alta tasa de aprobación.</li>
                  <li><strong>Acompañamiento post-curso</strong> para encontrar empleo en España.</li>
                </ul>

                <figure>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop" alt="Grupo de estudiantes internacionales con banderas en España">
                  <figcaption>Unsplash — Comunidad internacional y oportunidades post-curso.</figcaption>
                </figure>

                <h2 id="consejos">Consejos clave para tu aplicación y estancia</h2>
                <ul class="checklist">
                  <li>Presenta la solicitud <strong>60–90 días</strong> antes del comienzo del curso.</li>
                  <li>Verifica que el <strong>centro esté acreditado</strong>.</li>
                  <li>Asegúrate de que el <strong>pasaporte</strong> tenga al menos <strong>un año</strong> de validez.</li>
                  <li><strong>Traduce/apostilla</strong> los documentos extranjeros.</li>
                  <li>Conserva <strong>copias</strong> de todo lo entregado.</li>
                  <li>Mantente <strong>matriculado y asistente</strong> para renovar sin problemas.</li>
                  <li>Planifica tu <strong>transición al trabajo</strong>: adapta tu CV al mercado español, mejora idioma y participa en <strong>prácticas</strong> que ofrecemos.</li>
                </ul>

                <div class="sep"></div>

                <h2 id="conclusion">Conclusión: tu futuro empieza hoy en España</h2>
                <p>Estudiar en España no solo es una oportunidad académica — es una <strong>puerta a tu carrera profesional</strong> y a la <strong>residencia en Europa</strong>. Con un visado de estudios correctamente gestionado y la formación adecuada, <strong>puedes estudiar, trabajar y construir tu vida</strong> en España.</p>

                <div class="callout">
                  <p><strong>📌 ¿Quieres dar el primer paso?</strong> Contáctanos ahora y descubre cómo nuestros cursos te abren la vía hacia el <strong>visado</strong>, la <strong>residencia</strong> y el <strong>empleo</strong> en España.</p>
                </div>
              `}} />
            </div>

            {/* Columna derecha: Imagen + Índice */}
            <div className="lg:sticky lg:top-24 space-y-8 lg:order-2">
              {/* Imagen destacada */}
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