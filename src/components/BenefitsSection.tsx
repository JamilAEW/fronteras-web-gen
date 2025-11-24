import { CheckCircledIcon, PersonIcon, BarChartIcon, GlobeIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const benefits = [
  {
    icon: CheckCircledIcon,
    title: 'Official and Certifiable Training',
    description: 'Certificates recognized by official organizations',
  },
  {
    icon: PersonIcon,
    title: 'Tutoring with Expert Teachers',
    description: 'Personalized support throughout the course',
  },
  {
    icon: BarChartIcon,
    title: 'Practical Methodology',
    description: 'Learn with real cases and applied exercises',
  },
  {
    icon: GlobeIcon,
    title: 'Updated Content',
    description: 'Curriculum adapted to market needs',
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
            Become the Professional Companies Are Looking For
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
