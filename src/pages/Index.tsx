import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <section id="form-inicio" className="py-20 bg-brand-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold mb-4">Próximamente contenido completo</h2>
            <p className="text-lg text-muted-foreground">La web está en construcción. Todos los cursos y componentes están listos.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
