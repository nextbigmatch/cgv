import { Link } from 'react-router-dom';
import { Mail, ChevronRight, Linkedin, Instagram, ArrowRight, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// X/Twitter Icon (custom since lucide-react doesn't have the new X logo)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterProps {
  onConsultationClick?: () => void;
}

export default function Footer({ onConsultationClick }: FooterProps = {}) {
  const [contactInfo, setContactInfo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInfo.trim()) {
      // Handle contact submission
      console.log('Contact info submitted:', contactInfo);
      setSubmitted(true);
      setTimeout(() => {
        setContactInfo('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0F0F0F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Newsletter Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] bg-clip-text text-transparent"
          >
            Let's Discuss Your Project
          </motion.h2>
          
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl">
            No obligation. No pressure.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="max-w-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="Enter your email or phone number"
                className="flex-1 px-6 py-4 bg-[#1A1A1A] border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF7029] transition-colors"
                disabled={submitted}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {submitted ? 'Submitted!' : 'Submit'}
                {!submitted && <ArrowRight className="w-5 h-5" />}
              </motion.button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#FF7029] mt-4 text-sm"
              >
                Thank you! We'll get back to you soon.
              </motion.p>
            )}
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Website Links */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-[#FF6A2A] transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-6">Contacts</h3>
            <div className="space-y-4 mb-auto">
              <p className="text-neutral-400">+91 8054932039</p>
              <p className="text-neutral-400">info@coregrowvision.com</p>
              <p className="text-neutral-400">projects@coregrowvision.com</p>
              <p className="text-neutral-400">9th Floor, Municipal Heights, Sector 104, Mohali, Punjab 160055, India</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 mt-6">
              <a 
                href="https://www.linkedin.com/company/core-grow-vision/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/coregrowvision/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.facebook.com/coregrowvision" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Terms and Copyright */}
          <div className="lg:col-span-5">
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              By using this website, you agree to follow all applicable laws and respect intellectual property rights. Unauthorized use or misuse of content is prohibited. All disputes are governed by applicable local laws.
            </p>

            <p className="text-neutral-400 text-sm mb-4">
              © 2026 Core Grow Vision. All rights reserved.
            </p>

            <p className="text-neutral-500 text-sm mb-4">
              Actively delivering digital solutions since 2020.
            </p>

            <p className="text-neutral-600 text-xs flex items-center gap-2">
              🔐 Clients receive access to a private delivery dashboard for ongoing visibility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}