import { Helmet } from 'react-helmet';
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
import { OrganizationSchema, FAQSchema } from '@/components/StructuredData';
import { faqGeneral } from '@/data/faq-general';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Educar Sin Fronteras - Formación para Visado y Arraigo en España</title>
        <meta name="description" content="Cursos oficiales para visado, estancia por estudios y arraigo socioformativo en Madrid. Financiación sin intereses y certificación oficial." />
        <link rel="canonical" href="https://educarsinfronteras.es/" />
        <meta name="keywords" content="visado estudios españa, arraigo socioformativo, cursos oficiales madrid, estancia por estudios, certificación profesional" />
      </Helmet>
      <OrganizationSchema />
      <FAQSchema faqs={faqGeneral} />
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
