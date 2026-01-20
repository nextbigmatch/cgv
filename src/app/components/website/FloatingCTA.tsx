import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { ConsultationFlow } from '@/app/components/website/ConsultationFlow';

interface FloatingCTAProps {
  onConsultationClick?: () => void;
}

export default function FloatingCTA({ onConsultationClick }: FloatingCTAProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-8 right-8 z-40 bg-[#FF7029] hover:bg-[#FF8540] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-medium transition-colors group"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Book Free Consultation</span>
            <span className="sm:hidden">Book Call</span>
            
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#FF7029] animate-ping opacity-20"></span>
          </motion.button>
        )}
      </AnimatePresence>

      <ConsultationFlow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
