import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@coregrowvision.com',
      subInfo: 'projects@coregrowvision.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 8054932039',
      subInfo: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '9th Floor, Municipal Heights',
      subInfo: 'Sector 104, Mohali, Punjab 160055, India'
    }
  ];

  const officeHours = [
    { day: 'Monday – Saturday', hours: '9:30 AM – 5:30 PM' },
    { day: '2nd & 4th Saturdays', hours: 'Closed' }
  ];

  return (
    <div className="bg-[#0F0F0F] text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #FF7029 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's Start a <span className="text-[#FF7029]">Conversation</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's make something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-colors text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-300 mb-1">{item.info}</p>
                  <p className="text-sm text-neutral-500">{item.subInfo}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section ref={formRef} className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Office Hours */}
              <div className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-b-0">
                      <span className="text-neutral-400">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
                <div className="bg-[#0F0F0F] border border-neutral-800 rounded-xl p-4">
                  <p className="text-sm text-neutral-500 mb-2">Average Response Time</p>
                  <p className="text-2xl font-bold text-[#FF7029]">{"< 24 hours"}</p>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-square bg-neutral-900 hidden lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODYyMTA2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl overflow-hidden aspect-[21/9]"
          >
            {/* Placeholder for map - you can integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center bg-neutral-900">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FF7029] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Find Us Here</h3>
                <p className="text-neutral-400">9th Floor, Municipal Heights, Sector 104, Mohali, Punjab 160055, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-[#FF7029]">Questions</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Have questions? We have answers. If you don't see your question here, feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. A typical website project takes 6-12 weeks, while larger applications may take 3-6 months. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you offer ongoing support after launch?',
                answer: 'Yes, we offer comprehensive post-launch support packages including maintenance, updates, and technical assistance. We believe in building long-term partnerships with our clients.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent, detailed quotes after understanding your requirements. Contact us for a free consultation and estimate.'
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely! We often collaborate with in-house teams and can adapt our workflow to complement your existing processes. We\'re experienced in various collaboration models.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-6 hover:border-[#FF7029] transition-colors"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}