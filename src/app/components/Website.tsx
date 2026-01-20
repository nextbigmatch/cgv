import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '@/app/components/website/Navbar';
import Footer from '@/app/components/website/Footer';
import HomePage from '@/app/components/website/HomePage';
import AboutPage from '@/app/components/website/AboutPage';
import ServicesPage from '@/app/components/website/ServicesPage';
import ServiceDetailPage from '@/app/components/website/ServiceDetailPage';
import IndustriesPage from '@/app/components/website/IndustriesPage';
import CaseStudiesPage from '@/app/components/website/CaseStudiesPage';
import BlogPage from '@/app/components/website/BlogPage';
import BlogDetailPage from '@/app/components/website/BlogDetailPage';
import CareersPage from '@/app/components/website/CareersPage';
import ContactPage from '@/app/components/website/ContactPage';
import BrandProfilePhoto from '@/app/components/website/BrandProfilePhoto';
import ClientLogin from '@/app/components/website/ClientLogin';
import ClientDashboard from '@/app/components/website/ClientDashboard';
import FloatingCTA from '@/app/components/website/FloatingCTA';
import { ConsultationFlow } from '@/app/components/website/ConsultationFlow';

export default function Website() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
      <Routes>
        {/* Client Portal Routes (no navbar/footer) */}
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        
        {/* Public Website Routes (with navbar/footer) */}
        <Route path="*" element={
          <>
            <Navbar onConsultationClick={() => setConsultationOpen(true)} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:postId" element={<BlogDetailPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/brand-profile" element={<BrandProfilePhoto />} />
              </Routes>
            </main>
            <Footer onConsultationClick={() => setConsultationOpen(true)} />
            <FloatingCTA onConsultationClick={() => setConsultationOpen(true)} />
            <ConsultationFlow 
              isOpen={consultationOpen} 
              onClose={() => setConsultationOpen(false)} 
            />
          </>
        } />
      </Routes>
    </div>
  );
}