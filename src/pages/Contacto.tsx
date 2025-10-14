import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-display font-bold mb-6">Contacto</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
