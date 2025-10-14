import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Curso } from '@/data/courses';
import { ChevronRightIcon } from '@radix-ui/react-icons';

interface CourseCardProps {
  curso: Curso;
}

const CourseCard = ({ curso }: CourseCardProps) => {
  const badgeColor = curso.categoria === 'visado-estancia' ? 'border-brand-yellow text-brand-yellow' : 'border-brand-red text-brand-red';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft hover:shadow-lg transition-all group">
      <div className="mb-4">
        <Badge variant="outline" className={`${badgeColor} mb-3`}>
          {curso.categoria === 'visado-estancia' ? 'Visado / Estancia' : 'Arraigo Socioformativo'}
        </Badge>
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
          {curso.titulo}
        </h3>
      </div>
      <p className="text-muted-foreground mb-4 line-clamp-3">{curso.resumen}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        {curso.horas && <span>{curso.horas} horas</span>}
        {curso.modalidad && (
          <span className="capitalize">
            {curso.modalidad === 'mixta' ? 'Semipresencial' : curso.modalidad}
          </span>
        )}
      </div>
      <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-white transition-all">
        <Link to={`/cursos/${curso.slug}`}>
          Ver ficha completa
          <ChevronRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
};

export default CourseCard;
