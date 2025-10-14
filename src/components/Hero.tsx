import { Button } from '@/components/ui/button';
import { RocketIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          INSCRIPCIONES ABIERTAS
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Abre la puerta a nuevas oportunidades con nuestra formación y da el primer paso hacia
          tus metas.
        </p>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
            <a href="#form-inicio">
              <RocketIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Inscríbete aquí
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
