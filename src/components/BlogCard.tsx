// ==========================================
// COMPONENTE: BlogCard
// ==========================================
// Tarjeta de entrada de blog, similar a CourseCard
// Muestra: título, resumen, fecha, autor, categoría

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/blog';
import { BookOpenIcon, CalendarIcon, UserIcon } from 'lucide-react';

// ==========================================
// PROPS DEL COMPONENTE
// ==========================================
interface BlogCardProps {
  post: BlogPost;        // Datos de la entrada del blog
  isHomepage?: boolean;  // Si se muestra en homepage (limita líneas)
}

// ==========================================
// FUNCIÓN: Obtener color de badge según categoría
// ==========================================
const getCategoryBadgeColor = (categoria: BlogPost['categoria']): string => {
  switch (categoria) {
    case 'visado':
      return 'bg-primary text-primary-foreground';
    case 'arraigo':
      return 'bg-accent text-accent-foreground';
    case 'general':
      return 'bg-secondary text-secondary-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

// ==========================================
// FUNCIÓN: Obtener texto de categoría
// ==========================================
const getCategoryText = (categoria: BlogPost['categoria']): string => {
  switch (categoria) {
    case 'visado':
      return 'Visado / Estancia';
    case 'arraigo':
      return 'Arraigo Socioformativo';
    case 'general':
      return 'General';
    default:
      return 'General';
  }
};

// ==========================================
// FUNCIÓN: Formatear fecha
// ==========================================
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
const BlogCard = ({ post, isHomepage = false }: BlogCardProps) => {
  const badgeColor = getCategoryBadgeColor(post.categoria);
  const categoryText = getCategoryText(post.categoria);
  
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* ==========================================
          HEADER CON GRADIENTE
          ========================================== */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
        {/* Imagen de fondo si existe */}
        {post.imagen && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.imagen})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
          </>
        )}
        
        {/* Icono en esquina superior izquierda */}
        <div className="absolute top-4 left-4">
          <div className="p-3 bg-primary/90 rounded-xl backdrop-blur-sm">
            <BookOpenIcon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>

        {/* Badge de categoría en esquina superior derecha */}
        <div className="absolute top-4 right-4">
          <Badge variant="default" className={`${badgeColor} shadow-md`}>
            {categoryText}
          </Badge>
        </div>
      </div>

      {/* ==========================================
          CONTENIDO DE LA TARJETA
          ========================================== */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {post.titulo}
        </h3>

        {/* Resumen */}
        <div className="mb-4">
          <p className={`text-sm text-muted-foreground ${isHomepage ? 'line-clamp-3' : 'line-clamp-4'}`}>
            {post.resumen}
          </p>
        </div>

        {/* Meta información (Fecha y Autor) */}
        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
          {/* Fecha */}
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{formatDate(post.fecha)}</span>
          </div>
          
          {/* Autor */}
          <div className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span>{post.autor}</span>
          </div>
        </div>

        {/* Spacer para empujar el botón al fondo */}
        <div className="flex-grow" />

        {/* Botón CTA */}
        <Button 
          asChild 
          className="w-full"
          size="lg"
        >
          <Link to={`/guia-gratuita/${post.slug}`} className="flex items-center justify-center gap-2">
            Leer más
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
