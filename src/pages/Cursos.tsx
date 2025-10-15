import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { courses, Categoria } from '@/data/courses';
import { Button } from '@/components/ui/button';

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categoria | 'todos'>('todos');

  const filteredCourses = selectedCategory === 'todos' 
    ? courses 
    : courses.filter(c => c.categoria === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Todos los Cursos | Educar Sin Fronteras</title>
        <meta 
          name="description" 
          content="Encuentra las titulaciones que se adapten mejor a ti. 100% oficial. Estudia con la máxima flexibilidad." 
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-brand-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl px-8 md:px-16 py-12 md:py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Catálogo de Cursos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Encuentra las titulaciones que se adapten mejor a ti. 100% oficial. Estudia con la máxima flexibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              En <strong>Educar Sin Fronteras</strong>, nos comprometemos a ofrecer una educación de calidad que te prepare para los desafíos del mundo laboral actual. Nuestros programas están diseñados para proporcionarte las competencias y conocimientos especializados que demandan las empresas líderes en diversos sectores.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === 'todos' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('todos')}
              className="rounded-full"
            >
              Todos los cursos
            </Button>
            <Button
              variant={selectedCategory === 'visado-estancia' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('visado-estancia')}
              className="rounded-full"
            >
              Visado / Estancia
            </Button>
            <Button
              variant={selectedCategory === 'arraigo' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('arraigo')}
              className="rounded-full"
            >
              Arraigo Socioformativo
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((curso) => (
              <CourseCard key={curso.slug} curso={curso} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron cursos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cursos;
