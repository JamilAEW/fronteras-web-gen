import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { MessageCircle } from 'lucide-react';
import MegaMenuCursos from './MegaMenuCursos';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMegaMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold text-primary">ESF</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>

            <Link
              to="/cursos"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </Link>

            <Link
              to="/quienes-somos"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              ¿Quiénes somos?
            </Link>

            <Link
              to="/contacto"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://portal.educarsinfronteras.es/acceso.cgi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aula Virtual
              </a>
            </Button>
            <Button 
              size="sm" 
              asChild 
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
            >
              <a 
                href="https://wa.link/eaetlq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Habla con una asesora ahora!
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            aria-label="Menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <Cross1Icon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
            >
              Inicio
            </Link>
            <Link
              to="/cursos"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
            >
              Cursos
            </Link>
            <Link
              to="/quienes-somos"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
            >
              ¿Quiénes somos?
            </Link>
            <Link
              to="/contacto"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
            >
              Contacto
            </Link>
            <div className="px-4 pt-2 space-y-2">
              <Button variant="outline" size="sm" asChild className="w-full">
                <a
                  href="https://portal.educarsinfronteras.es/acceso.cgi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aula Virtual
                </a>
              </Button>
              <Button 
                size="sm" 
                asChild 
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
              >
                <a 
                  href="https://wa.link/eaetlq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Habla con una asesora ahora!
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
