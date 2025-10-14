import { StarFilledIcon, PersonIcon, BarChartIcon, BackpackIcon } from '@radix-ui/react-icons';

const stats = [
  {
    icon: StarFilledIcon,
    value: '30',
    label: 'Años de experiencia',
  },
  {
    icon: PersonIcon,
    value: '24.000',
    label: 'Alumnos formados',
  },
  {
    icon: BarChartIcon,
    value: '2.400',
    label: 'Programas finalizados',
  },
  {
    icon: BackpackIcon,
    value: '1.600',
    label: 'Prácticas en empresas',
  },
];

const StatsStrip = () => {
  return (
    <section className="py-16 bg-primary text-white">
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
