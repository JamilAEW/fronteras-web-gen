import { Link } from 'react-router-dom';
import logoJamEducar from '@/assets/logo-jam-educar.webp';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src={logoJamEducar} 
            alt="JAM Educar Sin Fronteras" 
            className="h-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-display font-bold mb-2">EDUCAR SIN FRONTERAS</h2>
          <p className="text-white/80">
            Study and regularize with high labor demand training
          </p>
        </div>
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Educar Sin Fronteras. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacidad" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link to="/legal" className="hover:text-white transition-colors">
              Legal Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
