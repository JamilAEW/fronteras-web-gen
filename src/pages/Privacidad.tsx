import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacidad = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Educar Sin Fronteras</title>
        <meta
          name="description"
          content="Política de privacidad y protección de datos personales de Educar Sin Fronteras. Cumplimiento RGPD y LOPD GDD."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Política de Privacidad
              </h1>
              <p className="text-lg text-muted-foreground">
                Protección de Datos Personales y Garantía de Derechos Digitales
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  El Titular le informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados durante la navegación a través del Sitio Web: <a href="https://educarsinfronteras.es" className="text-primary hover:underline">https://educarsinfronteras.es</a>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Identidad del Responsable
                </h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong>Responsable:</strong> El titular del sitio</li>
                  <li><strong>Domicilio:</strong> España</li>
                  <li><strong>Sitio Web:</strong> <a href="https://educarsinfronteras.es" className="text-primary hover:underline">https://educarsinfronteras.es</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Principios aplicados en el tratamiento de datos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En el tratamiento de sus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos (RGPD):
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li>
                    <strong>Principio de licitud, lealtad y transparencia:</strong> El Titular siempre requerirá el consentimiento para el tratamiento de los datos personales que puede ser para uno o varios fines específicos sobre los que el Titular informará al Usuario previamente con absoluta transparencia.
                  </li>
                  <li>
                    <strong>Principio de minimización de datos:</strong> El Titular solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.
                  </li>
                  <li>
                    <strong>Principio de limitación del plazo de conservación:</strong> El Titular mantendrá los datos personales recabados durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular informará al Usuario del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.
                  </li>
                  <li>
                    <strong>Principio de integridad y confidencialidad:</strong> Los datos personales recabados serán tratados de tal manera que su seguridad, confidencialidad e integridad está garantizada. El Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Obtención de datos personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para navegar por el sitio Web no es necesario que facilite ningún dato personal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Derechos del Usuario
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Titular le informa que sobre sus datos personales tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Solicitar el acceso a los datos almacenados</li>
                  <li>Solicitar una rectificación o la supresión</li>
                  <li>Solicitar la limitación de su tratamiento</li>
                  <li>Oponerse al tratamiento</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular. Para ejercitar sus derechos tiene que enviar su petición junto con una fotocopia del Documento Nacional de Identidad o equivalente a la dirección de correo postal del Titular en España.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tiene derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si considera que el tratamiento de datos personales que le conciernen infringe el Reglamento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Finalidad del tratamiento de datos personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cuando usted se conecta al Sitio Web para mandar un correo al Titular o se suscribe a su boletín está facilitando información de carácter personal de la que el responsable es el Titular. Esta información puede incluir datos de carácter personal como pueden ser su dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Existen otras finalidades por las que el Titular trata datos personales:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Para garantizar el cumplimiento de las condiciones recogidas en la página de Aviso Legal y de la ley aplicable</li>
                  <li>Para apoyar y mejorar los servicios que ofrece este Sitio Web</li>
                  <li>Para analizar la navegación de los usuarios mediante cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Seguridad de los datos personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para proteger sus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  El Titular informa al Usuario de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos esté amparada en una obligación legal o cuando la prestación de un servicio implique la necesidad de una relación contractual con un encargado de tratamiento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Contenido de otros sitios web
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubiera visitado la otra web.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Estos sitios Web pueden recopilar datos sobre usted, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar su interacción usando este código.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Legitimación para el tratamiento de datos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La base legal para el tratamiento de sus datos es el consentimiento del interesado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Categorías de datos personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las categorías de datos personales que trata el Titular son datos identificativos. No se tratan categorías de datos especialmente protegidos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Conservación de datos personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Los datos personales proporcionados al Titular se conservarán hasta que solicite su supresión.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Navegación Web
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al navegar por el Sitio Web se pueden recoger datos no identificativos, que pueden incluir la dirección IP, geolocalización, un registro de cómo se utilizan los servicios y sitios, hábitos de navegación y otros datos que no pueden ser utilizados para identificarle.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  El Titular no se hace responsable del tratamiento de los datos personales que realicen las páginas web a las que pueda acceder a través de los distintos enlaces que contiene el Sitio Web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Exactitud y veracidad de los datos personales
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Usted se compromete a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Como Usuario del Sitio Web es el único responsable de la veracidad y corrección de los datos remitidos al Sitio Web exonerando al Titular de cualquier responsabilidad al respecto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Aceptación y consentimiento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Como Usuario del Sitio Web declara haber sido informado de las condiciones sobre protección de datos de carácter personal, acepta y consiente el tratamiento de los mismos por parte del Titular en la forma y para las finalidades indicadas en esta Política de Privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Cambios en la Política de Privacidad
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  El Titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.
                </p>
              </section>

              <section className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Información adicional
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Para más información sobre protección de datos y privacidad en la Unión Europea, puede consultar la{" "}
                  <a
                    href="https://www.europarl.europa.eu/privacy-policy/es/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    política de privacidad del Parlamento Europeo
                  </a>
                  .
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

export default Privacidad;
