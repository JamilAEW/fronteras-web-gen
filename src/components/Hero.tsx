import { RocketIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import BlurText from './BlurText';
import StarBorder from './StarBorder';

const Hero = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Carousel wrapper */}
      <div id="default-carousel" className="relative w-full h-[600px]" data-carousel="slide">
        {/* Carousel items */}
        <div className="relative h-full overflow-hidden">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-brand-900">
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-primary to-accent">
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-brand-900 to-primary">
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
          <div className="max-w-4xl mx-auto px-4 text-center py-20">
            <BlurText
              text="INSCRIPCIONES ABIERTAS"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white"
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
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
