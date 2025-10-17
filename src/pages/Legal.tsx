import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | Educar Sin Fronteras</title>
        <meta
          name="description"
          content="Aviso legal de Educar Sin Fronteras. Condiciones de uso, limitación de responsabilidad y términos legales del sitio web."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Aviso Legal
              </h1>
              <p className="text-lg text-muted-foreground">
                Condiciones de uso y términos legales del sitio web
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Identificación y Titularidad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, el Titular expone sus datos identificativos:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong>Titular:</strong> El titular del sitio</li>
                  <li><strong>Domicilio:</strong> España</li>
                  <li><strong>Sitio Web:</strong> <a href="https://educarsinfronteras.es" className="text-primary hover:underline">https://educarsinfronteras.es</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Condiciones de Uso
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La utilización del Sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en las páginas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>Aviso Legal</li>
                  <li><Link to="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link></li>
                  <li><Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link></li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar el Sitio Web.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El acceso al Sitio Web no supone, en modo alguno, el inicio de una relación comercial con el Titular.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A través del Sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular y/o sus colaboradores han publicado por medio de Internet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A tal efecto, está obligado y comprometido a NO utilizar cualquiera de los contenidos del Sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por el Titular, de otros usuarios o de cualquier usuario de Internet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Medidas de seguridad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los datos personales que facilite al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva al Titular, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No obstante, debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos aunque el Titular pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Tratamiento de Datos Personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puede consultar toda la información relativa al tratamiento de datos personales que recoge el Titular en la página de{" "}
                  <Link to="/privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Contenidos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el Sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. El Titular declina expresamente cualquier responsabilidad por error u omisión en la información contenida en las páginas del Sitio Web.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Queda prohibido transmitir o enviar a través del Sitio Web cualquier contenido ilegal o ilícito, virus informáticos, o mensajes que, en general, afecten o violen derechos del Titular o de terceros.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los contenidos del Sitio Web tienen únicamente una finalidad informativa y bajo ninguna circunstancia deben usarse ni considerarse como oferta de venta, solicitud de una oferta de compra ni recomendación para realizar cualquier otra operación, salvo que así se indique expresamente.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Titular se reserva el derecho a modificar, suspender, cancelar o restringir el contenido del Sitio Web, los vínculos o la información obtenida a través del Sitio Web, sin necesidad de previo aviso.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El Titular no es responsable de los daños y perjuicios que pudieran derivarse de la utilización de la información del Sitio Web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Política de cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies en la página de{" "}
                  <Link to="/cookies" className="text-primary hover:underline">
                    Política de Cookies
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Enlaces a otros sitios Web
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Titular puede proporcionarle acceso a sitios Web de terceros mediante enlaces con la finalidad exclusiva de informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos ofrecidos en el Sitio Web.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estos enlaces a otros sitios Web no suponen en ningún caso una sugerencia o recomendación para que usted visite las páginas web de destino, que están fuera del control del Titular, por lo que el Titular no es responsable del contenido de los sitios web vinculados ni del resultado que obtenga al seguir los enlaces. Asimismo, el Titular no responde de los links o enlaces ubicados en los sitios web vinculados a los que le proporciona acceso.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre el Titular y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte del Titular de sus contenidos o servicios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si accede a un sitio web externo desde un enlace que encuentre en el Sitio Web usted deberá leer la propia política de privacidad del otro sitio web que puede ser diferente de la de este sitio Web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Propiedad intelectual e industrial
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todos los derechos están reservados.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Todo acceso a este Sitio Web está sujeto a las siguientes condiciones: la reproducción, almacenaje permanente y la difusión de los contenidos o cualquier otro uso que tenga finalidad pública o comercial queda expresamente prohibida sin el consentimiento previo expreso y por escrito del Titular.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Limitación de responsabilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La información y servicios incluidos o disponibles a través del Sitio Web pueden incluir incorrecciones o errores tipográficos. De forma periódica el Titular incorpora mejoras y/o cambios a la información contenida y/o los Servicios que puede introducir en cualquier momento.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Titular no declara ni garantiza que los servicios o contenidos sean interrumpidos o que estén libres de errores, que los defectos sean corregidos, o que el servicio o el servidor que lo pone a disposición estén libres de virus u otros componentes nocivos sin perjuicio de que el Titular realiza todos los esfuerzos en evitar este tipo de incidentes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Titular declina cualquier responsabilidad en caso de que existan interrupciones o un mal funcionamiento de los Servicios o contenidos ofrecidos en Internet, cualquiera que sea su causa. Asimismo, el Titular no se hace responsable por caídas de la red, pérdidas de negocio a consecuencia de dichas caídas, suspensiones temporales de fluido eléctrico o cualquier otro tipo de daño indirecto que te pueda ser causado por causas ajenas a el Titular.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Antes de tomar decisiones y/o acciones con base a la información incluida en el Sitio Web, el Titular le recomienda comprobar y contrastar la información recibida con otras fuentes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Jurisdicción
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este Aviso Legal se rige íntegramente por la legislación española.
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Legal;
