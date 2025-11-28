import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Locations from '@/components/Locations';
import { Button } from '@/components/ui/button';
import CoursesSelect from '@/components/CoursesSelect';
import { toast } from 'sonner';
import { EnvelopeClosedIcon, MobileIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { LocalBusinessSchema } from '@/components/StructuredData';
import { sedes } from '@/data/sedes';

const Contacto = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    curso: '',
    mensaje: '',
    rgpd: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      toast.error('Debes aceptar la política de privacidad');
      return;
    }
    toast.success('¡Mensaje enviado! Nos pondremos en contacto pronto.');
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      curso: '',
      mensaje: '',
      rgpd: false,
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Contacto | Educar Sin Fronteras</title>
        <meta name="description" content="Contacta con Educar Sin Fronteras. 3 sedes en Madrid: Salamanca, Usera y Carabanchel. Tel: +34 658 40 39 06 | Email: info@educarsinfronteras.es" />
        <link rel="canonical" href="https://educarsinfronteras.es/contacto" />
        <meta name="keywords" content="contacto educar sin fronteras, sedes madrid, teléfono centro formación, dirección" />
      </Helmet>
      {sedes.map((sede) => (
        <LocalBusinessSchema
          key={sede.nombre}
          name={`Educar Sin Fronteras - ${sede.nombre}`}
          address={{
            streetAddress: sede.direccion,
            addressLocality: sede.ciudad,
            postalCode: sede.cp,
          }}
          telephone={sede.telefono}
          email={sede.email}
        />
      ))}
      <Navbar />
      <main>
        {/* Hero interno */}
        <section className="py-20 bg-gradient-to-br from-primary to-brand-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contacto</h1>
            <p className="text-xl text-white/90">
              Estamos aquí para ayudarte en tu proceso de formación
            </p>
          </div>
        </section>

        {/* Formulario y datos de contacto */}
        <section 
          ref={ref as React.RefObject<HTMLElement>}
          className={`py-20 bg-background transition-all duration-1000 ${
            isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulario */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
                <h2 className="text-3xl font-display font-bold mb-6">Envíanos un mensaje</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contacto-nombre" className="block text-sm font-medium mb-1.5">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="contacto-nombre"
                        required
                        maxLength={100}
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contacto-apellidos" className="block text-sm font-medium mb-1.5">
                        Apellidos *
                      </label>
                      <input
                        type="text"
                        id="contacto-apellidos"
                        required
                        maxLength={100}
                        value={formData.apellidos}
                        onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                        className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contacto-email" className="block text-sm font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contacto-email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto-telefono" className="block text-sm font-medium mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="contacto-telefono"
                      required
                      maxLength={20}
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto-curso" className="block text-sm font-medium mb-1.5">
                      Curso de interés
                    </label>
                    <CoursesSelect
                      value={formData.curso}
                      onChange={(value) => setFormData({ ...formData, curso: value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto-mensaje" className="block text-sm font-medium mb-1.5">
                      Mensaje *
                    </label>
                    <textarea
                      id="contacto-mensaje"
                      rows={5}
                      required
                      maxLength={1000}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="contacto-rgpd"
                      required
                      checked={formData.rgpd}
                      onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="contacto-rgpd" className="text-xs text-muted-foreground">
                      Acepto la{' '}
                      <a href="/privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </a>{' '}
                      y el tratamiento de mis datos *
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-brand-900">
                    Enviar mensaje
                  </Button>
                </form>
              </div>

              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
                  <h3 className="text-2xl font-display font-bold mb-6">Información de contacto</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MobileIcon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Teléfono</p>
                        <a
                          href="tel:+34658403906"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +34 658 40 39 06
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <EnvelopeClosedIcon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a
                          href="mailto:info@educarsinfronteras.es"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@educarsinfronteras.es
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-2xl border border-accent/20 p-8">
                  <h3 className="text-xl font-display font-bold mb-3">Horario de atención</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Lunes a Viernes:</strong> 9:00 - 18:00
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Sábados:</strong> 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sedes */}
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
