import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/data/courses';
import { BookOpenIcon, TrendingUpIcon, ShieldIcon, PackageIcon, PhoneIcon, SparklesIcon, HeartPulseIcon } from 'lucide-react';
import marketingImage from '@/assets/courses/marketing-digital.jpg';
import ciberseguridadImage from '@/assets/courses/ciberseguridad.jpg';
import logisticaImage from '@/assets/courses/logistica.jpg';
import sociosanitariaImage from '@/assets/courses/sociosanitaria.jpg';
import teleasistenciaImage from '@/assets/courses/teleasistencia.jpg';
import limpiezaImage from '@/assets/courses/limpieza.jpg';

interface CourseCardProps {
  curso: Curso;
  isHomepage?: boolean;
}

const getCourseImage = (slug: string): string => {
  if (slug.includes('marketing')) return marketingImage;
  if (slug.includes('hacking') || slug.includes('ciberseguridad')) return ciberseguridadImage;
  if (slug.includes('logistic') || slug.includes('almacen')) return logisticaImage;
  if (slug.includes('sociosanitaria') || slug.includes('atencion-sociosanitaria')) return sociosanitariaImage;
  if (slug.includes('teleasistencia')) return teleasistenciaImage;
  if (slug.includes('limpieza')) return limpiezaImage;
  return sociosanitariaImage; // default
};

const getCourseIcon = (slug: string) => {
  if (slug.includes('marketing')) return TrendingUpIcon;
  if (slug.includes('hacking') || slug.includes('ciberseguridad')) return ShieldIcon;
  if (slug.includes('logistic') || slug.includes('almacen')) return PackageIcon;
  if (slug.includes('sociosanitaria') || slug.includes('atencion-sociosanitaria')) return HeartPulseIcon;
  if (slug.includes('teleasistencia')) return PhoneIcon;
  if (slug.includes('limpieza')) return SparklesIcon;
  return BookOpenIcon; // default
};

const CourseCard = ({ curso, isHomepage = false }: CourseCardProps) => {
  const backgroundImage = getCourseImage(curso.slug);
  const IconComponent = getCourseIcon(curso.slug);
  
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Header Image */}
      <div className="relative h-48 bg-primary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
        
        {/* Icon in header */}
        <div className="absolute top-4 left-4">
          <div className="p-3 bg-primary/90 rounded-xl backdrop-blur-sm">
            <IconComponent className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>

        {/* Badges in header */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {curso.categoria === 'visado-estancia' ? (
            <>
              <Badge variant="default" className="bg-primary text-primary-foreground shadow-md">
                Visado / Estancia
              </Badge>
              {curso.modalidad && (
                <Badge variant="secondary" className="shadow-md capitalize">
                  {curso.modalidad === 'mixta' ? 'Semipresencial' : curso.modalidad === 'online' ? 'Online' : 'Presencial'}
                </Badge>
              )}
            </>
          ) : (
            <Badge variant="default" className="bg-accent text-accent-foreground shadow-md">
              Arraigo Socioformativo
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {curso.titulo}
        </h3>

        {/* Course Summary */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Resumen del curso</h4>
          <p className={`text-sm text-muted-foreground ${isHomepage ? 'line-clamp-3' : 'line-clamp-4'}`}>
            {curso.resumen}
          </p>
        </div>

        {/* Meta Info */}
        {curso.horas && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <BookOpenIcon className="h-4 w-4" />
            <span>{curso.horas} horas de formación</span>
          </div>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-grow" />

        {/* CTA Button */}
        <Button 
          asChild 
          className="w-full"
          size="lg"
        >
          <Link to={`/cursos/${curso.slug}`} className="flex items-center justify-center gap-2">
            Más información
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
