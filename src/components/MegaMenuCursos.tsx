import { Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import {
  GlobeIcon,
  LockClosedIcon,
  ArchiveIcon,
  HeartIcon,
  ClipboardIcon,
  Component1Icon,
  RocketIcon,
  ScissorsIcon,
  CookieIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';

const iconMap: Record<string, any> = {
  marketing: GlobeIcon,
  hacking: LockClosedIcon,
  logistica: ArchiveIcon,
  venta: GlobeIcon,
  sociosanitaria: HeartIcon,
  almacenes: ArchiveIcon,
  teleasistencia: ClipboardIcon,
  limpieza: Component1Icon,
  dependientes: HeartIcon,
  administrativos: FileTextIcon,
  transporte: RocketIcon,
  peluqueria: ScissorsIcon,
  restaurante: CookieIcon,
};

const getIconForCourse = (slug: string) => {
  if (slug.includes('marketing')) return iconMap.marketing;
  if (slug.includes('hacking')) return iconMap.hacking;
  if (slug.includes('logistic')) return iconMap.logistica;
  if (slug.includes('venta')) return iconMap.venta;
  if (slug.includes('sociosanitaria') || slug.includes('dependencia')) return iconMap.sociosanitaria;
  if (slug.includes('almacen')) return iconMap.almacenes;
  if (slug.includes('teleasistencia')) return iconMap.teleasistencia;
  if (slug.includes('limpieza')) return iconMap.limpieza;
  if (slug.includes('instituciones')) return iconMap.dependientes;
  if (slug.includes('administrativos')) return iconMap.administrativos;
  if (slug.includes('transporte')) return iconMap.transporte;
  if (slug.includes('peluqueria')) return iconMap.peluqueria;
  if (slug.includes('restaurante')) return iconMap.restaurante;
  return GlobeIcon;
};

const MegaMenuCursos = () => {
  const cursosVisado = courses.filter((c) => c.categoria === 'visado-estancia');
  const cursosArraigo = courses.filter((c) => c.categoria === 'arraigo');

  return (
    <div className="absolute left-0 top-full mt-2 w-[600px] bg-popover border rounded-2xl shadow-soft p-6 z-50">
      <div className="grid grid-cols-2 gap-6">
        {/* Columna A: Visado/Estancia */}
        <div>
          <h3 className="text-sm font-semibold text-brand-yellow mb-3 font-display">
            Visado / Estancia por estudios
          </h3>
          <ul className="space-y-2">
            {cursosVisado.map((curso) => {
              const Icon = getIconForCourse(curso.slug);
              return (
                <li key={curso.slug}>
                  <Link
                    to={`/cursos/${curso.slug}`}
                    className="flex items-start gap-2 p-2 rounded-md hover:bg-secondary transition-colors group"
                  >
                    <Icon
                      className="h-5 w-5 text-brand-yellow mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary">
                      {curso.titulo}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Columna B: Arraigo */}
        <div>
          <h3 className="text-sm font-semibold text-brand-red mb-3 font-display">
            Arraigo Socioformativo
          </h3>
          <ul className="space-y-2">
            {cursosArraigo.map((curso) => {
              const Icon = getIconForCourse(curso.slug);
              return (
                <li key={curso.slug}>
                  <Link
                    to={`/cursos/${curso.slug}`}
                    className="flex items-start gap-2 p-2 rounded-md hover:bg-secondary transition-colors group"
                  >
                    <Icon
                      className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary">
                      {curso.titulo}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuCursos;
