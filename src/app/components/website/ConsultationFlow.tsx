import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ConsultationFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'trust' | 'context' | 'confirmation';

export function ConsultationFlow({ isOpen, onClose }: ConsultationFlowProps) {
  const [step, setStep] = useState<Step>('trust');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    lookingFor: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFinalSubmit();
  };

  const handleFinalSubmit = () => {
    // Here you would send data to backend/Supabase
    console.log('Consultation request:', formData);
    setStep('confirmation');
  };

  const resetAndClose = () => {
    setStep('trust');
    setFormData({
      name: '',
      email: '',
      company: '',
      lookingFor: '',
      message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          onClick={resetAndClose}
          className="fixed inset-0 bg-black bg-opacity-70 z-[100] backdrop-blur-sm flex items-center justify-center p-4"
          style={{ cursor: 'pointer' }}
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            style={{ cursor: 'default' }}
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-6 right-6 w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {/* TRUST SCREEN */}
                {step === 'trust' && (
                  <motion.div
                    key="trust"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#FF7029]">
                        Let's Understand Your Requirements
                      </h2>
                      <p className="text-lg text-neutral-400 leading-relaxed max-w-lg mx-auto">
                        This free consultation helps us understand your goals and suggest the right approach. No sales pressure.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3 text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                        <p>Real conversation with our core team</p>
                      </div>
                      <div className="flex items-start gap-3 text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                        <p>Honest assessment of what you need</p>
                      </div>
                      <div className="flex items-start gap-3 text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                        <p>No obligation to proceed</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep('context')}
                      className="w-full bg-[#FF7029] hover:bg-[#FF8540] text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* CONTEXT FORM */}
                {step === 'context' && (
                  <motion.div
                    key="context"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-2 text-[#FF7029]">Quick Context</h2>
                      <p className="text-neutral-400">This will only take 30 seconds</p>
                    </div>

                    <form onSubmit={handleContextSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          What are you looking for? *
                        </label>
                        <select
                          required
                          value={formData.lookingFor}
                          onChange={(e) => handleInputChange('lookingFor', e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="website">Website Development</option>
                          <option value="app">Mobile App Development</option>
                          <option value="seo">SEO / Digital Marketing</option>
                          <option value="brand">Brand / Design</option>
                          <option value="ecommerce">E-Commerce Solution</option>
                          <option value="consultation">Consultation Only</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Message (Optional)
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={4}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors resize-none"
                          placeholder="Share a quick overview, goals, or timelines to help us prepare"
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep('trust')}
                          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-[#FF7029] hover:bg-[#FF8540] text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          Submit
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* CONFIRMATION */}
                {step === 'confirmation' && (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-[#FF7029] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#FF7029]" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">Thanks for Reaching Out</h2>
                    <p className="text-lg text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">
                      One of our core team members will personally review your request and get back to you shortly.
                    </p>

                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 mb-8 text-left">
                      <p className="text-sm text-neutral-400 mb-4">
                        You'll also receive access to your private project dashboard once we begin.
                      </p>
                    </div>

                    <button
                      onClick={resetAndClose}
                      className="bg-[#FF7029] hover:bg-[#FF8540] text-white px-10 py-4 rounded-full font-medium transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}