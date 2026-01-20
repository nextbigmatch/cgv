import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Calendar, Phone, MessageSquare, CheckCircle2, Clock, UserCircle } from 'lucide-react';

interface ConsultationFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'trust' | 'context' | 'method' | 'calendar' | 'callback' | 'message' | 'confirmation';

export function ConsultationFlow({ isOpen, onClose }: ConsultationFlowProps) {
  const [step, setStep] = useState<Step>('trust');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    lookingFor: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('method');
  };

  const handleMethodChoice = (method: 'calendar' | 'callback' | 'message') => {
    setStep(method);
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
      message: '',
      preferredDate: '',
      preferredTime: ''
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
                          Continue
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* METHOD CHOICE */}
                {step === 'method' && (
                  <motion.div
                    key="method"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-2">How Would You Like to Talk?</h2>
                      <p className="text-neutral-400">Choose what works best for you</p>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={() => handleMethodChoice('calendar')}
                        className="w-full bg-[#1A1A1A] hover:bg-[#252525] border border-neutral-800 hover:border-[#FF7029] rounded-2xl p-6 text-left transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#FF7029] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                            <Calendar className="w-6 h-6 text-[#FF7029]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">Schedule a Call</h3>
                            <p className="text-neutral-400">Choose a time that works for you</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-[#FF7029] transition-colors mt-3" />
                        </div>
                      </button>

                      <button
                        onClick={() => handleMethodChoice('callback')}
                        className="w-full bg-[#1A1A1A] hover:bg-[#252525] border border-neutral-800 hover:border-[#FF7029] rounded-2xl p-6 text-left transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#FF7029] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                            <Phone className="w-6 h-6 text-[#FF7029]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">Get a Call Back</h3>
                            <p className="text-neutral-400">We'll reach out within 24 business hours</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-[#FF7029] transition-colors mt-3" />
                        </div>
                      </button>

                      <button
                        onClick={() => handleMethodChoice('message')}
                        className="w-full bg-[#1A1A1A] hover:bg-[#252525] border border-neutral-800 hover:border-[#FF7029] rounded-2xl p-6 text-left transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#FF7029] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                            <MessageSquare className="w-6 h-6 text-[#FF7029]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">Start With Message</h3>
                            <p className="text-neutral-400">Prefer to explain in writing first</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-[#FF7029] transition-colors mt-3" />
                        </div>
                      </button>
                    </div>

                    <button
                      onClick={() => setStep('context')}
                      className="w-full mt-6 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
                    >
                      Back
                    </button>
                  </motion.div>
                )}

                {/* CALENDAR BOOKING */}
                {step === 'calendar' && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-2">Schedule Your Call</h2>
                      <p className="text-neutral-400">Pick a time that works for you</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Preferred Time Slot (Business Hours)
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                        >
                          <option value="">Select a time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </select>
                      </div>

                      <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-4 flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-neutral-400">
                          <p className="font-medium text-neutral-300 mb-1">30-minute session</p>
                          <p>We'll send you a calendar invite with meeting details</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep('method')}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleFinalSubmit}
                        className="flex-1 bg-[#FF7029] hover:bg-[#FF8540] text-white px-8 py-4 rounded-full font-medium transition-colors"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* CALLBACK REQUEST */}
                {step === 'callback' && (
                  <motion.div
                    key="callback"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-2">We'll Call You Back</h2>
                      <p className="text-neutral-400">Within 24 business hours</p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <CheckCircle2 className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-neutral-300 mb-1">We've saved your details</p>
                            <p className="text-sm text-neutral-400">Name: {formData.name}</p>
                            <p className="text-sm text-neutral-400">Email: {formData.email}</p>
                            <p className="text-sm text-neutral-400">Interest: {formData.lookingFor}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Best time to reach you (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors"
                          placeholder="e.g., Weekday mornings work best"
                        />
                      </div>

                      <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-4 flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-neutral-400">
                          <p className="font-medium text-neutral-300 mb-1">What happens next?</p>
                          <p>One of our team members will reach out to you via email or phone to schedule a convenient time</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep('method')}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleFinalSubmit}
                        className="flex-1 bg-[#FF7029] hover:bg-[#FF8540] text-white px-8 py-4 rounded-full font-medium transition-colors"
                      >
                        Submit Request
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* MESSAGE */}
                {step === 'message' && (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-2">Tell Us More</h2>
                      <p className="text-neutral-400">Share your requirements in detail</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Your Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={6}
                          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7029] transition-colors resize-none"
                          placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
                        />
                      </div>

                      <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-4 flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-[#FF7029] flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-neutral-400">
                          <p className="font-medium text-neutral-300 mb-1">We'll review and respond</p>
                          <p>Our team will carefully read your message and respond with next steps within 24 business hours</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep('method')}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleFinalSubmit}
                        className="flex-1 bg-[#FF7029] hover:bg-[#FF8540] text-white px-8 py-4 rounded-full font-medium transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
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
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Clock className="w-4 h-4" />
                        <span>Expected response: Within 24 business hours</span>
                      </div>
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