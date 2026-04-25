import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Destinations from './components/Destinations';
import Advantages from './components/Advantages';
import Services from './components/Services';
import ComparisonTable from './components/ComparisonTable';
import EligibilityCriteria from './components/EligibilityCriteria';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import UniversitiesPage from './pages/UniversitiesPage';
import UniversityDetailPage from './pages/UniversityDetailPage';

import WhatsAppButton from './components/WhatsAppButton';

function LandingPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <Destinations />
      <Advantages />
      <ComparisonTable />
      <EligibilityCriteria />
      <Services />
      <Testimonials />
      <CTASection />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-primary pb-24 md:pb-0 overflow-x-hidden relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/university/:id" element={<UniversityDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
