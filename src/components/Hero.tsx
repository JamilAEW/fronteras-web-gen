import { RocketIcon } from '@radix-ui/react-icons';
import BlurText from './BlurText';
import StarBorder from './StarBorder';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <BlurText
          text="INSCRIPCIONES ABIERTAS"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
        />
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Abre la puerta a nuevas oportunidades con nuestra formación y da el primer paso hacia
          tus metas.
        </p>
        <div className="flex justify-center">
          <StarBorder
            as="a"
            href="#form-inicio"
            color="cyan"
            speed="5s"
            className="cursor-pointer"
          >
            <RocketIcon className="mr-2 h-5 w-5 inline" aria-hidden="true" />
            Inscríbete aquí
          </StarBorder>
        </div>
      </div>
    </section>
  );
};

export default Hero;
