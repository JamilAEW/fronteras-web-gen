import { CheckCircledIcon, PersonIcon, BarChartIcon, GlobeIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const benefits = [
  {
    icon: CheckCircledIcon,
    title: 'Formación oficial y certificable',
    description: 'Certificados reconocidos por organismos oficiales',
  },
  {
    icon: PersonIcon,
    title: 'Tutorías con docentes expertos',
    description: 'Acompañamiento personalizado durante todo el curso',
  },
  {
    icon: BarChartIcon,
    title: 'Metodología práctica',
    description: 'Aprende con casos reales y ejercicios aplicados',
  },
  {
    icon: GlobeIcon,
    title: 'Contenido actualizado',
    description: 'Temarios adaptados a las necesidades del mercado',
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Conviértete en el profesional que las empresas están buscando
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
