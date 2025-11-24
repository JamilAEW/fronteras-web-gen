import { ClipboardIcon, RocketIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const features = [
  {
    icon: ClipboardIcon,
    title: 'Socio-formative Rootedness',
    description: 'Official certificates that allow you to regularize your status in Spain',
  },
  {
    icon: RocketIcon,
    title: 'Stay / Study Visa',
    description: 'University courses valid for obtaining your visa or legal stay',
  },
  {
    icon: ChatBubbleIcon,
    title: 'Free Consultation',
    description: 'Personalized advice to choose the best path for your situation',
  },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
