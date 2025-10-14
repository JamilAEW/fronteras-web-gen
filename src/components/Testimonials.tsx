import { StarFilledIcon } from '@radix-ui/react-icons';

const testimonials = [
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

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
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
            <span className="text-lg font-semibold">4.8/5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarFilledIcon key={i} className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.comment}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
