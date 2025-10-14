import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/data/courses';
import NotFound from './NotFound';

const Curso = () => {
  const { slug } = useParams<{ slug: string }>();
  const curso = courses.find((c) => c.slug === slug);

  if (!curso) return <NotFound />;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold mb-4">{curso.titulo}</h1>
          <p className="text-lg">{curso.resumen}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curso;
