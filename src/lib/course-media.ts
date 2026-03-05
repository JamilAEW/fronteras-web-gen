import marketingImage from '@/assets/courses/marketing-digital.jpg';
import ciberseguridadImage from '@/assets/courses/ciberseguridad.jpg';
import logisticaImage from '@/assets/courses/logistica.jpg';
import sociosanitariaImage from '@/assets/courses/sociosanitaria.jpg';
import teleasistenciaImage from '@/assets/courses/teleasistencia.jpg';
import limpiezaImage from '@/assets/courses/limpieza.jpg';
import auxiliarCocinaImage from '@/assets/courses/auxiliar-cocina.jpg';
import electricidadBajaTensionImage from '@/assets/courses/electricidad-baja-tension.jpg';
import soporteSistemasRedesImage from '@/assets/courses/soporte-sistemas-redes.jpg';
import horecaGestionImage from '@/assets/courses/horeca-gestion.jpg';

export const getCourseImage = (slug: string): string => {
  if (slug.includes('marketing') || slug.includes('venta-online')) return marketingImage;
  if (slug.includes('hacking') || slug.includes('ciberseguridad')) return ciberseguridadImage;
  if (slug.includes('logistic') || slug.includes('almacen')) return logisticaImage;
  if (slug.includes('auxiliar-de-cocina')) return auxiliarCocinaImage;
  if (slug.includes('sociosanitaria') || slug.includes('atencion-sociosanitaria')) return sociosanitariaImage;
  if (slug.includes('teleasistencia')) return teleasistenciaImage;
  if (slug.includes('limpieza')) return limpiezaImage;
  if (slug.includes('electricas') || slug.includes('baja-tension')) return electricidadBajaTensionImage;
  if (slug.includes('sistemas-informaticos') || slug.includes('redes')) return soporteSistemasRedesImage;
  if (slug.includes('horeca')) return horecaGestionImage;
  return marketingImage;
};
