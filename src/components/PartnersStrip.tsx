// ==========================================
// IMPORTACIONES
// ==========================================

// Hook para animación de scroll (fade-in cuando aparece en pantalla)
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

// Componente de carrusel de logos con animación marquee
import LogoLoop from './LogoLoop';

// ========================================
// IMPORTACIÓN DE LOGOS
// ========================================
// AGREGAR LOGO: Importa la imagen aquí y añádela al array 'partners'
// ELIMINAR LOGO: Quita la importación y elimina del array 'partners'
import comunidadMadridLogo from '@/assets/logos/comunidad-madrid.webp';
import euneizLogo from '@/assets/logos/euneiz.webp';
import unionEuropeaLogo from '@/assets/logos/union-europea.png';
import ministerioTrabajoSepeLogo from '@/assets/logos/ministerio-trabajo-sepe.jpg';
import iso9001Logo from '@/assets/logos/iso-9001.png';

// ==========================================
// CONFIGURACIÓN DE LOGOS
// ==========================================
// Array de logos que se mostrarán en el carrusel
//
// MODIFICAR:
// - AGREGAR LOGO: Añade un nuevo objeto al array
// - ELIMINAR LOGO: Quita un objeto del array
// - CAMBIAR ORDEN: Reorganiza los objetos
//
// ESTRUCTURA:
// - src: Ruta de la imagen importada
// - name: Nombre del colaborador (para título hover)
// - alt: Texto alternativo para accesibilidad (SEO importante)

const partners = [
  // Logo 1: Comunidad de Madrid
  { src: comunidadMadridLogo, name: 'Comunidad de Madrid', alt: 'Logo Comunidad de Madrid' },
  
  // Logo 2: Ministerio de Trabajo y SEPE
  { src: ministerioTrabajoSepeLogo, name: 'Ministerio de Trabajo y SEPE', alt: 'Logo Ministerio de Trabajo y Economía Social - SEPE' },
  
  // Logo 3: Unión Europea
  { src: unionEuropeaLogo, name: 'Unión Europea', alt: 'Logo Unión Europea - Cofinanciado por la Unión Europea' },
  
  // Logo 4: Universidad EUNEIZ
  { src: euneizLogo, name: 'EUNEIZ', alt: 'Logo Universidad EUNEIZ' },
  
  // Logo 5: Certificación ISO 9001
  { src: iso9001Logo, name: 'ISO 9001', alt: 'Certificación ISO 9001' },
];

// ==========================================
// TRANSFORMACIÓN DE DATOS
// ==========================================
// Convierte el array 'partners' al formato que espera el componente LogoLoop
//
// LÓGICA:
// - Si el partner tiene 'src' (imagen), usa la imagen
// - Si no tiene 'src', renderiza un badge de texto (placeholder)
//
// NO MODIFICAR: Esta transformación es automática

const partnerLogos = partners.map(partner => ({
  ...(partner.src ? {
    // Caso 1: Partner con imagen
    src: partner.src,        // Ruta de la imagen
    alt: partner.alt,        // Texto alternativo (accesibilidad)
    title: partner.name      // Tooltip al hacer hover
  } : {
    // Caso 2: Partner sin imagen (muestra badge de texto)
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

// ==========================================
// COMPONENTE PRINCIPAL: PartnersStrip
// ==========================================
// Sección que muestra un carrusel infinito de logos de colaboradores
//
// CARACTERÍSTICAS:
// - Animación fade-in al hacer scroll
// - Carrusel marquee infinito
// - Pausa al hacer hover
// - Efecto de escala al hover
// - Gradiente fade-out en los bordes

const PartnersStrip = () => {
  // ========================================
  // ANIMACIÓN DE SCROLL
  // ========================================
  // Hook que detecta cuando la sección es visible
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-primary text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      {/* ========================================
          CONTENEDOR PRINCIPAL
          ======================================== 
          - Ancho máximo: max-w-7xl
          - Padding horizontal: px-4
      */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ========================================
            ENCABEZADO DE LA SECCIÓN
            ========================================
            MODIFICAR:
            - Título: Línea 46-48
            - Subtítulo: Línea 49-51
        */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Nuestros aliados que avalan el trabajo que realizamos
          </h2>
          <p className="text-lg text-white/80">
            Acreditaciones y certificaciones oficiales
          </p>
        </div>
        
        {/* ========================================
            CARRUSEL DE LOGOS
            ========================================
            Componente LogoLoop con configuración personalizada
            
            MODIFICAR VELOCIDAD:
            - speed: Velocidad del scroll (50 = lento, 10 = rápido)
            
            MODIFICAR DIRECCIÓN:
            - direction: "left" o "right"
            
            MODIFICAR TAMAÑO:
            - logoHeight: Altura de los logos en px (140)
            
            MODIFICAR ESPACIADO:
            - gap: Espacio entre logos en px (40)
            
            EFECTOS:
            - pauseOnHover: Pausa animación al hacer hover
            - scaleOnHover: Escala logo al hacer hover
            - fadeOut: Gradiente fade-out en bordes
            - fadeOutColor: Color del gradiente (debe coincidir con bg)
        */}
        <div className="py-8">
          <LogoLoop
            logos={partnerLogos}              // Array de logos procesado
            speed={50}                        // Velocidad del scroll (menor = más rápido)
            direction="left"                  // Dirección del scroll
            logoHeight={140}                  // Altura máxima de logos en px
            gap={40}                          // Espacio entre logos en px
            pauseOnHover                      // Pausa al hacer hover
            scaleOnHover                      // Efecto zoom al hover
            fadeOut                           // Gradiente en bordes
            fadeOutColor="hsl(var(--primary))" // Color del gradiente (debe coincidir con bg-primary)
            ariaLabel="Nuestros aliados y certificaciones"  // Accesibilidad
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersStrip;
