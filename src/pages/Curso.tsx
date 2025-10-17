import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/data/courses';
import NotFound from './NotFound';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import FaqAccordion from '@/components/FaqAccordion';

const Curso = () => {
  const { slug } = useParams<{ slug: string }>();
  const curso = courses.find((c) => c.slug === slug);

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    sede: '',
    rgpd: false,
  });

  const [pdfFormData, setPdfFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    sede: '',
    rgpd: false,
  });

  if (!curso) return <NotFound />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      toast.error('Debes aceptar la política de privacidad');
      return;
    }
    toast.success('¡Solicitud enviada! Nos pondremos en contacto pronto.');
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      sede: '',
      rgpd: false,
    });
  };

  const handlePdfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFormData.rgpd) {
      toast.error('Debes aceptar la política de privacidad');
      return;
    }
    toast.success('¡Descarga iniciada! Revisa tu email.');
    setPdfFormData({
      nombre: '',
      telefono: '',
      email: '',
      sede: '',
      rgpd: false,
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {curso.titulo}
              </h1>
              {curso.etiquetas && curso.etiquetas.length > 0 && (
                <p className="text-lg mb-4 opacity-90">
                  {curso.etiquetas.join(' | ')}
                </p>
              )}
              <p className="text-lg mb-6 leading-relaxed">
                {curso.resumen}
              </p>
              {curso.modalidad && (
                <p className="mb-6">
                  <span className="font-semibold">Modalidad:</span> {curso.modalidad === 'presencial' ? 'Presencial' : curso.modalidad === 'mixta' ? 'Semipresencial (Mixta)' : 'Online'}
                </p>
              )}
              {curso.horas && (
                <p className="mb-8">
                  <span className="font-semibold">Duración:</span> {curso.horas} horas
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="text-[hsl(var(--brand-900))]"
                  onClick={() => document.getElementById('formulario-info')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicita información
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => document.getElementById('formulario-pdf')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Descarga el PDF gratis
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 aspect-square flex items-center justify-center">
                <p className="text-6xl opacity-50">📚</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Información */}
      <section id="formulario-info" className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold mb-4">
              Solicita info de tu titulación
            </h2>
            <p className="text-muted-foreground">
              Rellena los datos y te orientamos sin compromiso. Infórmate sobre el curso que estás visitando ahora.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-lg shadow-lg border">
            <div>
              <input
                type="text"
                placeholder="Nombre*"
                required
                maxLength={100}
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Teléfono*"
                required
                maxLength={20}
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Correo electrónico*"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <select
                required
                value={formData.sede}
                onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
              >
                <option value="">¿Dónde quieres estudiar?*</option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="online">Online</option>
              </select>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="info-rgpd"
                required
                checked={formData.rgpd}
                onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
                className="mt-1"
              />
              <label htmlFor="info-rgpd" className="text-xs text-muted-foreground">
                He leído y acepto la política de privacidad, las condiciones de uso, el aviso legal y el tratado de mis datos. DAVANTE FORMACIÓN puede enviarme información comercial de su programa formativo.
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Solicita información
            </Button>
          </form>
        </div>
      </section>

      {/* Plan de Estudios */}
      {curso.temario && curso.temario.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Plan de estudios
                </h2>
                <ul className="space-y-3">
                  {curso.temario.map((modulo, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">›</span>
                      <div>
                        <p className="font-medium">
                          {modulo.codigo && `${modulo.codigo} — `}{modulo.nombre}
                        </p>
                        {modulo.unidades && (
                          <ul className="mt-1 ml-4 space-y-1">
                            {modulo.unidades.map((unidad, uidx) => (
                              <li key={uidx} className="text-sm text-muted-foreground">
                                • {unidad}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:block">
                <div className="bg-muted/30 rounded-lg p-8 aspect-video flex items-center justify-center">
                  <p className="text-6xl opacity-50">📖</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Formulario PDF */}
      <section id="formulario-pdf" className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-primary/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-bold mb-2">
                Descarga el PDF
              </h2>
              <p className="text-sm text-muted-foreground">
                de la titulación
              </p>
            </div>
            
            <form onSubmit={handlePdfSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre*"
                  required
                  maxLength={100}
                  value={pdfFormData.nombre}
                  onChange={(e) => setPdfFormData({ ...pdfFormData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Teléfono*"
                  required
                  maxLength={20}
                  value={pdfFormData.telefono}
                  onChange={(e) => setPdfFormData({ ...pdfFormData, telefono: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  maxLength={255}
                  value={pdfFormData.email}
                  onChange={(e) => setPdfFormData({ ...pdfFormData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <select
                  required
                  value={pdfFormData.sede}
                  onChange={(e) => setPdfFormData({ ...pdfFormData, sede: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                >
                  <option value="">Seleccionar</option>
                  <option value="madrid">Madrid</option>
                  <option value="barcelona">Barcelona</option>
                  <option value="valencia">Valencia</option>
                  <option value="online">Online</option>
                </select>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="pdf-rgpd"
                  required
                  checked={pdfFormData.rgpd}
                  onChange={(e) => setPdfFormData({ ...pdfFormData, rgpd: e.target.checked })}
                  className="mt-1"
                />
                <label htmlFor="pdf-rgpd" className="text-xs text-muted-foreground">
                  He leído y acepto la política de privacidad, las condiciones de uso, el aviso legal y el tratado de mis datos. DAVANTE FORMACIÓN puede enviarme información comercial de su programa formativo.
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Descarga PDF gratis
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Requisitos de Acceso */}
      {curso.requisitos && curso.requisitos.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-6">
              Requisitos de acceso
            </h2>
            <div className="bg-card p-8 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                Para acceder a esta titulación deberás cumplir con {curso.requisitos.length === 1 ? 'el siguiente requisito' : 'los siguientes requisitos'}:
              </p>
              <ul className="space-y-2">
                {curso.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Salidas Profesionales */}
      {curso.salidaProfesional && curso.salidaProfesional.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-6">
              Salidas profesionales
            </h2>
            <div className="bg-card p-8 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                Al finalizar este curso estarás capacitado/a para trabajar en los siguientes puestos:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {curso.salidaProfesional.map((salida, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{salida}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {curso.faq && curso.faq.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <div className="-my-20">
              <FaqAccordion faqs={curso.faq} showTitle={false} showIcon={false} />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Curso;
