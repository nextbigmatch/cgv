import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, ShoppingBag, GraduationCap, TrendingUp, Building, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import healthcareImage from '../../../assets/73e3c245e0b07afd9a3344837647ffa74beed88c.png';
import ecommerceImage from '../../../assets/f04184aaeb1543c205d7664196cbd97c1e473b0b.png';
import educationImage from '../../../assets/9953c668ebf4cb74c98575d03c977cfc69974498.png';
import financeImage from '../../../assets/4704389719e2fd5e09161cd14543715f19918051.png';
import realEstateImage from '../../../assets/6515ebfdfd1f300e6e35a7422139614c08f011af.png';
import professionalServicesImage from '../../../assets/6b8273e5e14f194dd5dfa0c1ebf52e6ce2ad7cff.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
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

export default function IndustriesPage() {
  const heroRef = useRef(null);
  const industriesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const industriesInView = useInView(industriesRef, { once: true, amount: 0.2 });

  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Digital solutions for healthcare providers, from patient management systems to telemedicine platforms.',
      image: healthcareImage,
      services: [
        'Patient Portal Development',
        'Telemedicine Solutions',
        'Healthcare Analytics',
        'HIPAA Compliant Systems'
      ],
      challenges: 'Healthcare organizations need secure, compliant, and user-friendly digital solutions that improve patient care and operational efficiency.',
      solutions: 'We build HIPAA-compliant platforms that streamline workflows, enhance patient engagement, and provide actionable insights through data analytics.'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce & Retail',
      description: 'Comprehensive e-commerce solutions that drive sales and enhance customer experiences.',
      image: ecommerceImage,
      services: [
        'Online Store Development',
        'Inventory Management',
        'Payment Gateway Integration',
        'Customer Analytics'
      ],
      challenges: 'Retailers need robust online platforms that handle high traffic, provide seamless checkout experiences, and integrate with existing systems.',
      solutions: 'We create scalable e-commerce platforms with intuitive interfaces, secure payment processing, and comprehensive inventory management.'
    },
    {
      icon: GraduationCap,
      title: 'Education & E-Learning',
      description: 'Interactive learning platforms and educational management systems.',
      image: educationImage,
      services: [
        'Learning Management Systems',
        'Virtual Classroom Platforms',
        'Student Progress Tracking',
        'Interactive Content Tools'
      ],
      challenges: 'Educational institutions need engaging digital platforms that facilitate remote learning and improve student outcomes.',
      solutions: 'We develop interactive learning platforms with video conferencing, assignment management, and progress tracking features.'
    },
    {
      icon: TrendingUp,
      title: 'Finance & Fintech',
      description: 'Secure financial applications and innovative fintech solutions.',
      image: financeImage,
      services: [
        'Banking Applications',
        'Payment Processing Systems',
        'Investment Platforms',
        'Financial Analytics'
      ],
      challenges: 'Financial institutions require secure, compliant platforms that build trust while delivering seamless user experiences.',
      solutions: 'We build enterprise-grade financial applications with bank-level security, regulatory compliance, and intuitive interfaces.'
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Property management and real estate marketplace solutions.',
      image: realEstateImage,
      services: [
        'Property Listing Platforms',
        'Virtual Tour Integration',
        'CRM for Real Estate',
        'Lead Management Systems'
      ],
      challenges: 'Real estate businesses need platforms that showcase properties effectively and streamline the buying/renting process.',
      solutions: 'We create visually rich property platforms with advanced search, virtual tours, and integrated lead management.'
    },
    {
      icon: Stethoscope,
      title: 'Professional Services',
      description: 'Digital solutions for consulting, legal, and professional service firms.',
      image: professionalServicesImage,
      services: [
        'Client Portal Development',
        'Document Management',
        'Appointment Scheduling',
        'Time Tracking & Billing'
      ],
      challenges: 'Professional service firms need efficient tools to manage clients, projects, and billable hours while maintaining professionalism.',
      solutions: 'We develop comprehensive client management systems that streamline operations and enhance client relationships.'
    }
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
              Industries We <span className="text-[#FF7029]">Serve</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
              We bring deep industry expertise and technical excellence to deliver solutions tailored to your sector's unique challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={industriesRef} className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-8 left-8 w-20 h-20 bg-[#FF7029] bg-opacity-90 rounded-3xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Floating Accent */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-[#FF7029] rounded-3xl opacity-20 blur-2xl`}
                  />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                    {industry.title}
                  </h2>
                  <p className="text-xl text-neutral-400 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Services List */}
                  <div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6">
                    <h3 className="text-lg font-bold mb-4 text-[#FF7029]">Our Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {industry.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#FF7029] rounded-full flex-shrink-0"></div>
                          <span className="text-neutral-300 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">The Challenge</h3>
                      <p className="text-neutral-400 leading-relaxed">{industry.challenges}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Our Solution</h3>
                      <p className="text-neutral-400 leading-relaxed">{industry.solutions}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Trusted Across <span className="text-[#FF7029]">Industries</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Our diverse portfolio demonstrates our ability to deliver exceptional results across multiple sectors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '6+', label: 'Industries Served' },
              { number: '50+', label: 'Happy Clients' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-8"
              >
                <div className="text-5xl sm:text-6xl font-bold text-[#FF7029] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Don't See Your Industry? <span className="text-[#FF7029]">Let's Talk</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              We're always excited to explore new industries and challenges. Contact us to discuss how we can help your business.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}