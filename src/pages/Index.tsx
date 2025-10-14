import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PresentacionFormulario from '@/components/PresentacionFormulario';
import FeatureGrid from '@/components/FeatureGrid';
import CoursesFeatured from '@/components/CoursesFeatured';
import Testimonials from '@/components/Testimonials';
import FormularioCentral from '@/components/FormularioCentral';
import BenefitsSection from '@/components/BenefitsSection';
import FaqAccordion from '@/components/FaqAccordion';
import StatsStrip from '@/components/StatsStrip';
import PartnersStrip from '@/components/PartnersStrip';
import DiscountBlock from '@/components/DiscountBlock';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <PresentacionFormulario />
        <FeatureGrid />
        <CoursesFeatured />
        <Testimonials />
        <FormularioCentral />
        <BenefitsSection />
        <FaqAccordion />
        <StatsStrip />
        <PartnersStrip />
        <DiscountBlock />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
