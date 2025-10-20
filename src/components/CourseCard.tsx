import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Curso } from '@/data/courses';
import { BookOpenIcon } from 'lucide-react';

interface CourseCardProps {
  curso: Curso;
  variant?: 'home' | 'default';
}

const CourseCard = ({ curso, variant = 'default' }: CourseCardProps) => {
  const isHome = variant === 'home';
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="relative p-8 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6 inline-flex">
          <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
            <BookOpenIcon className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {curso.categoria === 'visado-estancia' ? (
            <>
              <Badge variant="outline" className="border-primary text-primary bg-primary/5 font-medium">
                Visado / Estancia
              </Badge>
              {curso.modalidad && (
                <Badge variant="outline" className="border-blue-500 text-blue-600 bg-blue-50 font-medium capitalize">
                  {curso.modalidad === 'mixta' ? 'Semipresencial' : curso.modalidad === 'online' ? 'Online' : 'Presencial'}
                </Badge>
              )}
            </>
          ) : (
            <Badge variant="outline" className="border-accent text-accent bg-accent/5 font-medium">
              Arraigo Socioformativo
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight ${isHome ? 'line-clamp-2' : ''}`}>
          {curso.titulo}
        </h3>

        {/* Description */}
        <p className={`text-muted-foreground mb-6 flex-grow ${isHome ? 'line-clamp-4' : 'line-clamp-3'}`}>
          {curso.resumen}
        </p>

        {/* Meta Info */}
        {curso.horas && (
          <div className="text-sm text-muted-foreground mb-6 font-medium">
            📚 {curso.horas} horas
          </div>
        )}

        {/* CTA Button */}
        <Button 
          asChild 
          className="w-full bg-primary hover:bg-brand-900 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group-hover:scale-[1.02]"
        >
          <Link to={`/cursos/${curso.slug}`} className="flex items-center justify-center gap-2">
            <BookOpenIcon className="h-5 w-5" />
            Más información
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
