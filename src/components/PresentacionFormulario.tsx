import StickyForm from './StickyForm';
import ShinyText from './ShinyText';
import { CheckCircledIcon, StarFilledIcon, BarChartIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const features = [
  {
    icon: CheckCircledIcon,
    text: 'Válidos para Visado/Estancia (unificado)',
  },
  {
    icon: StarFilledIcon,
    text: 'Opciones para Arraigo Socioformativo',
  },
  {
    icon: BarChartIcon,
    text: 'Contenidos actualizados, docentes expertos',
  },
];

const PresentacionFormulario = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="form-inicio" 
      className={`py-20 bg-brand-red transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Presentación */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ofrecemos formación de calidad, oficial y accesible para que logres tus objetivos en España
            </h2>
            <p className="text-lg mb-8">
              Nuestro compromiso garantiza tus derechos personales y de la
              empresa o familia. Cumplimos todos los requisitos para ofrecerte
              capacitaciones actualizadas y de alta demanda laboral.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <ShinyText text={feature.text} speed={8} className="text-lg pt-1.5 text-white" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna derecha - Formulario sticky */}
          <div>
            <StickyForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentacionFormulario;
