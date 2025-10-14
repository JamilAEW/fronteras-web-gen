import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import CoursesSelect from './CoursesSelect';

const StickyForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    curso: '',
    mensaje: '',
    rgpd: false,
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
      apellidos: '',
      email: '',
      telefono: '',
      curso: '',
      mensaje: '',
      rgpd: false,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft sticky top-24">
      <h3 className="text-2xl font-display font-bold mb-2">Formulario</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Completa el formulario y te contactaremos
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium mb-1.5">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            required
            maxLength={100}
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="apellidos" className="block text-sm font-medium mb-1.5">
            Apellidos *
          </label>
          <input
            type="text"
            id="apellidos"
            required
            maxLength={100}
            value={formData.apellidos}
            onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
            className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            maxLength={255}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium mb-1.5">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            required
            maxLength={20}
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="curso" className="block text-sm font-medium mb-1.5">
            Curso de interés *
          </label>
          <CoursesSelect
            value={formData.curso}
            onChange={(value) => setFormData({ ...formData, curso: value })}
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium mb-1.5">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={3}
            maxLength={500}
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="rgpd"
            required
            checked={formData.rgpd}
            onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
            className="mt-1"
          />
          <label htmlFor="rgpd" className="text-xs text-muted-foreground">
            Acepto la{' '}
            <a href="/privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </a>{' '}
            y el tratamiento de mis datos *
          </label>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-brand-900">
          Enviar solicitud
        </Button>
      </form>
    </div>
  );
};

export default StickyForm;
