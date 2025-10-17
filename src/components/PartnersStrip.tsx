import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const partners = [
  { name: 'Comunidad de Madrid', alt: 'Logo Comunidad de Madrid' },
  { name: 'Gobierno de España', alt: 'Logo Gobierno de España' },
  { name: 'SEPE', alt: 'Logo SEPE - Servicio Público de Empleo Estatal' },
  { name: 'Unión Europea - FSE', alt: 'Logo Fondo Social Europeo' },
  { name: 'Lider System', alt: 'Logo Lider System' },
  { name: 'EUNEIZ', alt: 'Logo Universidad EUNEIZ' },
];

const PartnersStrip = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-brand-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nuestros aliados que avalan el trabajo que realizamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Acreditaciones y certificaciones oficiales
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200"
              role="img"
              aria-label={partner.alt}
            >
              <span className="text-xs text-center font-medium text-muted-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersStrip;
