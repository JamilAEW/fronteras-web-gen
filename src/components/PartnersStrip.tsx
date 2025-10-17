import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import LogoLoop from './LogoLoop';
import comunidadMadridLogo from '@/assets/logos/comunidad-madrid.webp';

const partners = [
  { src: comunidadMadridLogo, name: 'Comunidad de Madrid', alt: 'Logo Comunidad de Madrid' },
  { name: 'Gobierno de España', alt: 'Logo Gobierno de España' },
  { name: 'SEPE', alt: 'Logo SEPE - Servicio Público de Empleo Estatal' },
  { name: 'Unión Europea - FSE', alt: 'Logo Fondo Social Europeo' },
  { name: 'Lider System', alt: 'Logo Lider System' },
  { name: 'EUNEIZ', alt: 'Logo Universidad EUNEIZ' },
];

const partnerLogos = partners.map(partner => ({
  ...(partner.src ? {
    src: partner.src,
    alt: partner.alt,
    title: partner.name
  } : {
    node: (
      <div className="flex items-center justify-center px-6 py-3 bg-white/10 rounded-lg border border-white/20 shadow-sm min-w-[180px]">
        <span className="text-sm text-center font-medium text-white whitespace-nowrap">
          {partner.name}
        </span>
      </div>
    ),
    title: partner.alt,
    ariaLabel: partner.alt
  })
}));

const PartnersStrip = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-primary text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Nuestros aliados que avalan el trabajo que realizamos
          </h2>
          <p className="text-lg text-white/80">
            Acreditaciones y certificaciones oficiales
          </p>
        </div>
        <div className="py-8">
          <LogoLoop
            logos={partnerLogos}
            speed={50}
            direction="left"
            logoHeight={60}
            gap={24}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--primary))"
            ariaLabel="Nuestros aliados y certificaciones"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersStrip;
