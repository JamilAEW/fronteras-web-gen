import { locations } from '@/data/locations';
import { HomeIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Locations = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-brand-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Locations</h2>
          <p className="text-lg text-muted-foreground">Easy access locations in Madrid</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <HomeIcon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                  <p className="text-sm text-muted-foreground">
                    {location.district}, {location.zipCode} {location.city}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-medium">Metro {location.metro}</span>
                </div>

                {location.phone && (
                  <p className="text-muted-foreground">Tel: {location.phone}</p>
                )}

                {location.email && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <EnvelopeClosedIcon className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs">{location.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
