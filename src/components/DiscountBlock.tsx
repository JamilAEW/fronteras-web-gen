import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DiscountBlock = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    rgpd: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      toast.error('Debes aceptar la política de privacidad');
      return;
    }
    toast.success('¡Solicitud enviada! Recibirás tu código de descuento por email.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      rgpd: false,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-brand-900 rounded-3xl overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Formulario */}
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Formulario</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="discount-nombre" className="block text-sm font-medium text-white mb-1.5">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="discount-nombre"
                    required
                    maxLength={100}
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 border border-white/20 rounded-lg bg-white/10 text-white placeholder:text-white/60 focus:ring-2 focus:ring-brand-yellow/40 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="discount-email" className="block text-sm font-medium text-white mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="discount-email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-white/20 rounded-lg bg-white/10 text-white placeholder:text-white/60 focus:ring-2 focus:ring-brand-yellow/40 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="discount-telefono" className="block text-sm font-medium text-white mb-1.5">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="discount-telefono"
                    required
                    maxLength={20}
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-2.5 border border-white/20 rounded-lg bg-white/10 text-white placeholder:text-white/60 focus:ring-2 focus:ring-brand-yellow/40 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="discount-rgpd"
                    required
                    checked={formData.rgpd}
                    onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
                    className="mt-1"
                  />
                  <label htmlFor="discount-rgpd" className="text-xs text-white/80">
                    Acepto la Política de Privacidad *
                  </label>
                </div>

                <Button type="submit" variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  Inscríbete aquí
                </Button>
              </form>
            </div>

            {/* Descuento */}
            <div className="flex flex-col items-center justify-center text-center text-white">
              <div className="text-9xl font-display font-black mb-4">10%</div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                DE DESCUENTO EN TU PRIMER CURSO
              </h3>
              <p className="text-lg text-white/80">
                Aprovecha esta oferta exclusiva y empieza tu formación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBlock;
