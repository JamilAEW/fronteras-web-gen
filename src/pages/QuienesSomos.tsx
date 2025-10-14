import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { aboutData } from '@/data/about';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircledIcon, RocketIcon } from '@radix-ui/react-icons';

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Hero interno */}
        <section className="py-20 bg-gradient-to-br from-primary to-brand-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              ¿Quiénes somos?
            </h1>
            <p className="text-xl text-white/90">
              Formación de calidad para tu futuro en España
            </p>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Misión */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
                <h2 className="text-3xl font-display font-bold mb-4 text-primary">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutData.mision}
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
                <h2 className="text-3xl font-display font-bold mb-4 text-primary">
                  Nuestra Visión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutData.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Quiénes somos? */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
              ¿QUIÉNES SOMOS?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              {aboutData.quienesSomos.map((parrafo, index) => (
                <p key={index} className="leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Garantías y acreditaciones */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
              Garantías y acreditaciones
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {aboutData.acreditaciones.map((acreditacion, index) => {
                const badgeColor =
                  acreditacion.tipo === 'visado'
                    ? 'border-brand-yellow text-brand-yellow'
                    : 'border-brand-red text-brand-red';

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircledIcon
                          className={`h-6 w-6 ${
                            acreditacion.tipo === 'visado' ? 'text-brand-yellow' : 'text-brand-red'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className={`${badgeColor} mb-2`}>
                          {acreditacion.tipo === 'visado'
                            ? 'Visado / Estancia'
                            : 'Arraigo Socioformativo'}
                        </Badge>
                        <h3 className="text-2xl font-display font-bold mb-3">
                          {acreditacion.titulo}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {acreditacion.descripcion}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTAs finales */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              ¿Listo para dar el siguiente paso?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-brand-900">
                <Link to={aboutData.ctas.primary.href}>
                  <RocketIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  {aboutData.ctas.primary.texto}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={aboutData.ctas.secondary.href}>
                  {aboutData.ctas.secondary.texto}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
