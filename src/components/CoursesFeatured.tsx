import { courses } from '@/data/courses';
import CourseCard from './CourseCard';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const CoursesFeatured = () => {
  const featuredCourses = courses.filter((c) => c.destacado).slice(0, 4);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="cursos" 
      className={`py-20 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Cursos más demandados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formación oficial y certificada para tu futuro en España
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((curso) => (
            <CourseCard key={curso.slug} curso={curso} isHomepage />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesFeatured;
