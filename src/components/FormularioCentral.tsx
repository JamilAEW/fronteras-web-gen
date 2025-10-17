import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
const FormularioCentral = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    rgpd: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      toast.error('Debes aceptar la política de privacidad');
      return;
    }
    toast.success('¡Solicitud enviada! Nos pondremos en contacto pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      rgpd: false
    });
  };
  return <section ref={ref as React.RefObject<HTMLElement>} className={`py-20 bg-primary transition-all duration-1000 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Formulario
          </h2>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <input type="text" placeholder="Nombre" required maxLength={100} value={formData.nombre} onChange={e => setFormData({
            ...formData,
            nombre: e.target.value
          })} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-brand-yellow/40 focus:border-transparent transition-all" />
          </div>

          <div>
            <input type="email" placeholder="Email" required maxLength={255} value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-brand-yellow/40 focus:border-transparent transition-all" />
          </div>

          <div>
            <input type="tel" placeholder="Teléfono" required maxLength={20} value={formData.telefono} onChange={e => setFormData({
            ...formData,
            telefono: e.target.value
          })} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-brand-yellow/40 focus:border-transparent transition-all" />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="central-rgpd" required checked={formData.rgpd} onChange={e => setFormData({
            ...formData,
            rgpd: e.target.checked
          })} className="mt-1" />
            <label htmlFor="central-rgpd" className="text-xs text-white/80">
              Acepto la Política de Privacidad *
            </label>
          </div>

          <Button type="submit" variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
            Inscríbete aquí
          </Button>
        </form>
      </div>
    </section>;
};
export default FormularioCentral;