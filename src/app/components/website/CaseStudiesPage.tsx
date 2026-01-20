import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import {
  VelocityLogo,
  SynergyLogo,
  HyatusLogo,
  ZenithLogo,
  NexoraLogo,
  HyatusHeroImg,
  GoldKioskHeroImg
} from '@/app/components/website/BrandLogos';

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
      staggerChildren: 0.15
    }
  }
};

export default function CaseStudiesPage() {
  const heroRef = useRef(null);
  const studiesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const studiesInView = useInView(studiesRef, { once: true, amount: 0.2 });

  const [filter, setFilter] = useState('all');

  const categories = ['all', 'e-commerce', 'branding', 'web-development'];

  const caseStudies = [
    {
      id: 1,
      title: 'GoldKiosk E-Commerce Platform',
      client: 'GoldKiosk',
      logo: VelocityLogo,
      category: 'e-commerce',
      industry: 'E-Commerce / Jewelry',
      description: 'Core Grow Vision developed a fully responsive, high-performance e-commerce platform for GoldKiosk.com, focusing on seamless shopping journeys, secure checkout, and scalable product management.',
      image: GoldKioskHeroImg,
      challenge: 'GoldKiosk needed a modern, secure e-commerce experience to display luxury jewelry and accessories without performance issues, while improving trust and usability.',
      solution: 'Developed a responsive platform with optimized product pages, secure payment integration, intuitive navigation, and CMS control for inventory and promotions.',
      results: [
        { metric: '+35%', label: 'User Growth' },
        { metric: '+50%', label: 'Faster Workflows' },
        { metric: '+42%', label: 'User Satisfaction' }
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React/Vue', 'MySQL', 'Stripe/PayPal', 'CMS'],
      duration: '5 months',
      year: '2024',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Real Recovery Talk Brand & Website',
      client: 'Real Recovery Talk',
      logo: SynergyLogo,
      category: 'branding',
      industry: 'Mental Health / Support',
      description: 'Core Grow Vision delivered a tailored brand book and supportive website design focused on accessibility and emotional connection, aligning aesthetics with mental health support messaging.',
      image: 'https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHN1cHBvcnR8ZW58MXx8fHwxNzY4NjM3NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'The client lacked a cohesive brand identity and needed a website design that was empathetic, trustworthy, and easy to navigate for visitors seeking recovery resources.',
      solution: 'Created a calming brand book with visual guidelines and designed a user-centric website with clear paths to resources, articles, and support pages.',
      results: [
        { metric: '+28%', label: 'Session Duration' },
        { metric: '+40%', label: 'Content Updates' },
        { metric: '+50%', label: 'User Sentiment' }
      ],
      technologies: ['Figma', 'Adobe XD', 'WordPress/Sanity', 'Responsive UI', 'Accessibility'],
      duration: '4 months',
      year: '2024',
      status: 'Ongoing Support'
    },
    {
      id: 3,
      title: 'Hyatus Brand Identity & Website',
      client: 'Hyatus',
      logo: HyatusLogo,
      category: 'branding',
      industry: 'Technology / Business',
      description: 'Core Grow Vision created a full brand book and high-impact UI design for the Hyatus website, ensuring a cohesive identity and modern digital presentation.',
      image: HyatusHeroImg,
      challenge: 'Hyatus needed a unified brand voice, color system, and visual guidelines that would elevate the company\'s digital authority and align future assets with core values.',
      solution: 'Developed a comprehensive brand book and designed a modern, structured website UI with optimized layouts and branding consistency.',
      results: [
        { metric: '+30%', label: 'New Visitors' },
        { metric: '+45%', label: 'Design Speed' },
        { metric: '+48%', label: 'Positive Feedback' }
      ],
      technologies: ['Brand Strategy', 'Figma', 'Design Tokens', 'UI Library', 'Style Guide'],
      duration: '4 months',
      year: '2024',
      status: 'Scaling'
    },
    {
      id: 4,
      title: 'AWS Boats Website Redesign',
      client: 'Action Watersports (AWS Boats)',
      logo: ZenithLogo,
      category: 'web-development',
      industry: 'Marine / Retail',
      description: 'Core Grow Vision redesigned and developed the Action Watersports website, improving navigation, inventory browsing, and responsive performance with a focus on marine sales and services.',
      image: 'https://images.unsplash.com/photo-1627761801957-4bf6cfb4fa20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMG9jZWFufGVufDF8fHx8MTc2ODU3MTg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'The existing site was outdated, lacked design cohesion, and did not provide easy inventory filtering or a modern sales path for boat shoppers.',
      solution: 'Delivered a responsive design with improved navigation, clear inventory categories, service pages, and contact pathways, boosting usability and user engagement.',
      results: [
        { metric: '+37%', label: 'Page Visits' },
        { metric: '+55%', label: 'Mobile Engagement' },
        { metric: '+45%', label: 'Positive Feedback' }
      ],
      technologies: ['HTML/CSS/JS', 'CMS/Inventory', 'Filters UX', 'Cross-Device'],
      duration: '6 months',
      year: '2024',
      status: 'Recently Launched'
    },
    {
      id: 5,
      title: 'Bloombar Watches E-Commerce',
      client: 'Bloombar Watches',
      logo: NexoraLogo,
      category: 'e-commerce',
      industry: 'Luxury / Watches',
      description: 'Core Grow Vision partnered with Bloombar Watches to improve brand presentation, refine website design, and enhance customer experience for luxury watch shoppers.',
      image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGJyYW5kfGVufDF8fHx8MTc2ODYzMzg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Bloombar needed a more premium, structured presentation and website design that increased trust, simplified navigation, and showcased high-value product collections effectively.',
      solution: 'Redesigned homepage, improved category displays, updated UI elements for product discovery, and made the overall experience more cohesive and engaging.',
      results: [
        { metric: '+33%', label: 'Engagement Time' },
        { metric: '+48%', label: 'Deploy Speed' },
        { metric: '+50%', label: 'Navigation Feedback' }
      ],
      technologies: ['Responsive Design', 'UI/UX', 'HTML/CSS/JS', 'CMS', 'SEO'],
      duration: '5 months',
      year: '2023',
      status: 'Ongoing Support'
    }
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

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
              Case <span className="text-[#FF7029]">Studies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
              Real projects, real results. Explore how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-[#FF7029] text-white'
                    : 'bg-[#1A1A1A] text-neutral-400 hover:bg-[#262626] border border-neutral-800'
                }`}
              >
                {category === 'all' ? 'All Projects' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={studiesRef} className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-32"
          >
            {filteredStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={study.id}
                  variants={fadeUp}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
                      
                      {/* Client Logo - Top Left */}
                      {study.logo && (
                        <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                          <study.logo className="w-20 h-auto max-h-20 object-contain" />
                        </div>
                      )}
                      
                      {/* Status Tag - Below Logo (Top Left) */}
                      {study.status && (
                        <div className="absolute top-32 left-6 bg-[#FF7029] bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-white text-sm font-medium">{study.status}</span>
                        </div>
                      )}
                      
                      {/* Year Badge */}
                      <div className="absolute top-6 right-6 bg-[#FF7029] bg-opacity-90 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-white font-bold">{study.year}</span>
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
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="bg-[#1A1A1A] px-4 py-2 rounded-full border border-neutral-800">
                        {study.industry}
                      </span>
                      <span className="bg-[#1A1A1A] px-4 py-2 rounded-full border border-neutral-800">
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                      {study.title}
                    </h2>
                    
                    <p className="text-lg text-[#FF7029] font-medium">
                      {study.client}
                    </p>

                    <p className="text-xl text-neutral-400 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 space-y-4">
                      <div>
                        <h3 className="text-sm font-bold text-[#FF7029] mb-2">THE CHALLENGE</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#FF7029] mb-2">THE SOLUTION</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-[#FF7029] mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-bold text-neutral-500 mb-3">TECHNOLOGIES</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-[#1A1A1A] border border-neutral-800 px-4 py-2 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
              Our <span className="text-[#FF7029]">Impact</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Delivering measurable results that drive business growth and success.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Target, number: '100+', label: 'Projects Delivered' },
              { icon: TrendingUp, number: '250%', label: 'Avg. Growth Rate' },
              { icon: Users, number: '50+', label: 'Happy Clients' },
              { icon: Target, number: '98%', label: 'Success Rate' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="text-center bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-8 hover:border-[#FF7029] transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-[#FF7029] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-neutral-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
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
              Ready to Be Our Next <span className="text-[#FF7029]">Success Story</span>?
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}