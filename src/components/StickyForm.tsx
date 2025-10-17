import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import CoursesSelect from './CoursesSelect';

const formSchema = z.object({
  nombre: z.string().trim().min(1, { message: 'El nombre es obligatorio' }).max(100, { message: 'Máximo 100 caracteres' }),
  apellidos: z.string().trim().min(1, { message: 'Los apellidos son obligatorios' }).max(100, { message: 'Máximo 100 caracteres' }),
  email: z.string().trim().email({ message: 'Email inválido' }).max(255, { message: 'Máximo 255 caracteres' }),
  telefono: z.string().trim().min(1, { message: 'El teléfono es obligatorio' }).max(20, { message: 'Máximo 20 caracteres' }),
  curso: z.string().min(1, { message: 'Selecciona un curso' }),
  mensaje: z.string().max(500, { message: 'Máximo 500 caracteres' }).optional(),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
});

const StickyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      curso: '',
      mensaje: '',
      rgpd: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success('¡Solicitud enviada! Nos pondremos en contacto pronto.');
    form.reset();
  };

  return (
    <div className="bg-background dark:bg-neutral-700 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-24">
      <h3 className="text-2xl font-display font-bold mb-2">Formulario</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Completa el formulario y te contactaremos
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="apellidos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Tus apellidos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+34 600 000 000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="curso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Curso de interés</FormLabel>
                <FormControl>
                  <CoursesSelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu mensaje aquí..."
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rgpd"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs text-muted-foreground font-normal">
                    Acepto la{' '}
                    <a href="/privacidad" className="text-primary hover:underline">
                      Política de Privacidad
                    </a>{' '}
                    y el tratamiento de mis datos *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
          >
            Enviar solicitud
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default StickyForm;
