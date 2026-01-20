import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Group from "@/imports/Group9";

interface NavbarProps {
  onConsultationClick?: () => void;
}

export default function Navbar({ onConsultationClick }: NavbarProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    { name: 'Web Development', slug: 'web-development' },
    { name: 'UI/UX Design', slug: 'ui-ux-design' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'Mobile App Development', slug: 'mobile-app-development' },
    { name: 'Branding & Strategy', slug: 'branding-strategy' },
    { name: 'E-Commerce Solutions', slug: 'ecommerce-solutions' }
  ];

  return (
    <nav className="bg-[#0F0F0F] border-b border-neutral-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-auto" style={{ height: '40px' }}>
              <Group />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-[#FF7029] transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                to="/services" 
                className="text-white hover:text-[#FF7029] transition-colors font-medium flex items-center gap-1 py-2"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block px-6 py-3 text-white hover:bg-[#FF7029] hover:text-black transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-neutral-800 mt-2 pt-2">
                        <Link
                          to="/services"
                          className="block px-6 py-3 text-[#FF7029] hover:bg-[#FF7029] hover:text-black transition-colors font-medium"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/industries" className="text-white hover:text-[#FF7029] transition-colors font-medium">
              Industries
            </Link>
            <Link to="/case-studies" className="text-white hover:text-[#FF7029] transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-white hover:text-[#FF7029] transition-colors font-medium">
              Blog
            </Link>
            <Link to="/careers" className="text-white hover:text-[#FF7029] transition-colors font-medium">
              Careers
            </Link>
            <button
              onClick={onConsultationClick}
              className="border-2 border-[#FF7029] hover:bg-[#FF7029] text-[#FF7029] hover:text-white px-6 py-2 rounded-full transition-colors font-medium"
            >
              Book Free Consultation
            </button>
            <Link 
              to="/contact" 
              className="text-white hover:text-[#FF7029] transition-colors font-medium"
            >
              Contact
            </Link>
            {/* <Link 
              to="/client/login" 
              className="text-neutral-400 hover:text-[#FF7029] transition-colors font-medium text-sm"
            >
              Client Login
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-white hover:text-[#FF7029] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left text-white hover:text-[#FF7029] transition-colors font-medium flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-neutral-800 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block text-neutral-400 hover:text-[#FF7029] transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block text-[#FF7029] hover:text-[#FF9F0A] transition-colors text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/industries" className="text-white hover:text-[#FF7029] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Industries
              </Link>
              <Link to="/case-studies" className="text-white hover:text-[#FF7029] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link to="/blog" className="text-white hover:text-[#FF7029] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/careers" className="text-white hover:text-[#FF7029] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConsultationClick?.();
                }}
                className="border-2 border-[#FF7029] hover:bg-[#FF7029] text-[#FF7029] hover:text-white px-6 py-3 rounded-full transition-colors font-medium text-center"
              >
                Book Free Consultation
              </button>
              <Link 
                to="/contact" 
                className="text-white hover:text-[#FF7029] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {/* <Link 
                to="/client/login" 
                className="text-neutral-400 hover:text-[#FF7029] transition-colors font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Login
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}