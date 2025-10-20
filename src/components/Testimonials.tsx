import { StarFilledIcon } from '@radix-ui/react-icons';
import { Marquee } from '@/components/ui/marquee';

const testimonials = [
  {
    name: 'Jeison Trujillo',
    comment: 'Excelente Servicio, Ana excelente asesora, muy atenta siempre resuelve 😉',
    rating: 5,
  },
  {
    name: 'Andres Manrique',
    comment: 'Muchas gracias por todo, en realidad he quedado muy contento con todo.',
    rating: 5,
  },
  {
    name: 'Nuria Mariela Rivas Vallecillo',
    comment: 'Muy buena atención súper amables 😊muchas gracias Ana Maria Orozco',
    rating: 5,
  },
  {
    name: 'María González',
    comment: 'Excelente academia, conseguí mi arraigo gracias a ellos. El equipo muy profesional y el apoyo constante.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    comment: 'La financiación sin intereses me ayudó mucho. Ahora tengo mi certificado y trabajo estable.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    comment: 'Recomiendo 100%. Los horarios de fin de semana fueron perfectos para mí.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="relative mx-2 w-[350px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <StarFilledIcon key={i} className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
      ))}
    </div>
    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{testimonial.comment}</p>
    <p className="font-semibold text-foreground">{testimonial.name}</p>
  </div>
);

const Testimonials = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section className="py-20 bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 24.000 estudiantes nos avalan
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarFilledIcon key={star} className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.7/5</span>
            <span className="text-sm text-muted-foreground">(235 reseñas)</span>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-brand-50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-50"></div>
      </div>
    </section>
  );
};

export default Testimonials;
