import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Educar Sin Fronteras</title>
        <meta
          name="description"
          content="Información sobre el uso de cookies en Educar Sin Fronteras. Aprende qué son las cookies y cómo gestionarlas."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Política de Cookies
              </h1>
              <p className="text-lg text-muted-foreground">
                Información sobre el uso de cookies y tecnologías similares
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Qué son las cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En inglés, el término "cookie" significa galleta, pero en el ámbito de la navegación web, una "cookie" es algo completamente distinto. Cuando accede a nuestro Sitio Web, en el navegador de su dispositivo se almacena una pequeña cantidad de texto que se denomina "cookie". Este texto contiene información variada sobre su navegación, hábitos, preferencias, personalizaciones de contenidos, etc.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Existen otras tecnologías que funcionan de manera similar y que también se usan para recopilar datos sobre tu actividad de navegación. Llamaremos "cookies" a todas estas tecnologías en su conjunto.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Los usos concretos que hacemos de estas tecnologías se describen en el presente documento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Para qué se utilizan las cookies en esta web?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las cookies son una parte esencial de cómo funciona el Sitio Web. El objetivo principal de nuestras cookies es mejorar su experiencia en la navegación. Por ejemplo, para recordar sus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. La información recogida en las cookies nos permite además mejorar la web, adaptarla a sus intereses como usuario, acelerar las búsquedas que realice, etc.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  En determinados casos, si hemos obtenido su previo consentimiento informado, podremos utilizar cookies para otros usos, como por ejemplo para obtener información que nos permita mostrarle publicidad basada en el análisis de sus hábitos de navegación.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Para qué NO se utilizan las cookies en esta web?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En las cookies que utilizamos no se almacena información sensible de identificación personal como su nombre, dirección, tu contraseña, etc.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Quién utiliza la información almacenada en las cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La información almacenada en las cookies de nuestro Sitio Web es utilizada exclusivamente por nosotros, a excepción de aquellas identificadas más adelante como "cookie de terceros", que son utilizadas y gestionadas por entidades externas que nos proporcionan servicios que mejoran la experiencia del usuario. Por ejemplo las estadísticas que se recogen sobre el número de visitas, el contenido que más gusta, etc.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Cómo puede evitar el uso de cookies en este Sitio Web?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si prefiere evitar el uso de las cookies, puede RECHAZAR su uso o puede CONFIGURAR las que quiere evitar y las que permite utilizar (en este documento le damos información ampliada al respecto de cada tipo de cookie, su finalidad, destinatario, temporalidad, etc.).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Si las ha aceptado, no volveremos a preguntarle a menos que borre las cookies en su dispositivo según se indica en el apartado siguiente. Si quiere revocar el consentimiento tendrá que eliminar las cookies y volver a configurarlas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Cómo deshabilito y elimino la utilización de cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para restringir, bloquear o borrar las cookies de este Sitio Web (y las usada por terceros) puede hacerlo, en cualquier momento, modificando la configuración de su navegador. Tenga en cuenta que esta configuración es diferente en cada navegador.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En los siguientes enlaces encontrará instrucciones para habilitar o deshabilitar las cookies en los navegadores más comunes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Safari
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Qué tipos de cookies se utilizan en esta página web?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cada página web utiliza sus propias cookies. En nuestra web utilizamos las que se indican a continuación:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      SEGÚN LA ENTIDAD QUE LO GESTIONA
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies propias:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el Usuario.
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies de terceros:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-2">
                          En el caso de que las cookies sean servidas desde un equipo o dominio gestionado por el propio editor, pero la información que se recoja mediante estas sea gestionada por un tercero, no pueden ser consideradas como cookies propias si el tercero las utiliza para sus propias finalidades (por ejemplo, la mejora de los servicios que presta o la prestación de servicios de carácter publicitario a favor de otras entidades).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      SEGÚN SU FINALIDAD
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies técnicas:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Son aquellas necesarias para la navegación y el buen funcionamiento de nuestro Sitio Web, como por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, realizar la solicitud de inscripción o participación en un evento, contar visitas a efectos de la facturación de licencias del software con el que funciona el servicio del Sitio Web, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido, habilitar contenidos dinámicos (por ejemplo, animación de carga de un texto o imagen).
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies de análisis:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del Sitio Web.
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies de preferencias o personalización:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Son aquellas que permiten recordar información para que el Usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar cuando el Usuario realiza una búsqueda, el aspecto o contenido del servicio en función del tipo de navegador a través del cual el Usuario accede al servicio o de la región desde la que accede al servicio, etc.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      SEGÚN EL PLAZO DE TIEMPO QUE PERMANECEN ACTIVADAS
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies de sesión:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Son aquellas diseñadas para recabar y almacenar datos mientras el Usuario accede a una página web.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-2">
                          Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el Usuario en una sola ocasión (por ejemplo, una lista de productos adquiridos) y desaparecen al terminar la sesión.
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cookies persistentes:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Son aquellas en las que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años. A este respecto debe valorarse específicamente si es necesaria la utilización de cookies persistentes, puesto que los riesgos para la privacidad podrían reducirse mediante la utilización de cookies de sesión. En todo caso, cuando se instalen cookies persistentes, se recomienda reducir al mínimo necesario su duración temporal atendiendo a la finalidad de su uso. A estos efectos, el Dictamen 4/2012 del GT29 indicó que para que una cookie pueda estar exenta del deber de consentimiento informado, su caducidad debe estar relacionada con su finalidad. Debido a ello, es mucho más probable que se consideren como exceptuadas las cookies de sesión que las persistentes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cookies;
