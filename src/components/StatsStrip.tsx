import { StarFilledIcon, PersonIcon, BarChartIcon, BackpackIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const stats = [
  {
    icon: StarFilledIcon,
    value: '6',
    label: 'Años de experiencia',
  },
  {
    icon: PersonIcon,
    value: '14.000',
    label: 'Alumnos formados',
  },
  {
    icon: BarChartIcon,
    value: '466',
    label: 'Programas finalizados',
  },
  {
    icon: BackpackIcon,
    value: '8.000',
    label: 'Prácticas en empresas',
  },
];

const StatsStrip = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-primary text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Demostrar autoridad y efectividad
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="h-10 w-10 mx-auto mb-3 text-brand-yellow" aria-hidden="true" />
                <p className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
