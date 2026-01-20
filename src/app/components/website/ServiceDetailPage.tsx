import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, FileText, Layers, Code, TestTube, Rocket, Headphones, Search, Grid, Pencil, Palette, Users, BarChart3, FileEdit, Target, Settings, TrendingUp, Smartphone, Monitor, AppWindow, Store, Package, ShoppingCart, CreditCard, Zap, Star, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

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
      staggerChildren: 0.1
    }
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const heroRef = useRef(null);
  const detailsRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.3 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });

  // Helper function to get icon for process step
  const getProcessIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('requirement') || titleLower.includes('analysis') || titleLower.includes('concept') || titleLower.includes('planning')) return FileText;
    if (titleLower.includes('architecture') || titleLower.includes('information')) return Layers;
    if (titleLower.includes('development') || titleLower.includes('agile')) return Code;
    if (titleLower.includes('test') || titleLower.includes('quality')) return TestTube;
    if (titleLower.includes('deployment') || titleLower.includes('launch') || titleLower.includes('submission')) return Rocket;
    if (titleLower.includes('support') || titleLower.includes('post-launch')) return Headphones;
    if (titleLower.includes('research') || titleLower.includes('user') || titleLower.includes('market') || titleLower.includes('discovery')) return Search;
    if (titleLower.includes('wireframe') || titleLower.includes('grid')) return Grid;
    if (titleLower.includes('visual') || titleLower.includes('design') && !titleLower.includes('store')) return Palette;
    if (titleLower.includes('prototype')) return Monitor;
    if (titleLower.includes('handoff')) return FileEdit;
    if (titleLower.includes('strategy')) return Target;
    if (titleLower.includes('campaign') || titleLower.includes('setup')) return Settings;
    if (titleLower.includes('content')) return FileEdit;
    if (titleLower.includes('performance') || titleLower.includes('tracking')) return BarChart3;
    if (titleLower.includes('optimization')) return TrendingUp;
    if (titleLower.includes('platform') || titleLower.includes('selection')) return Layers;
    if (titleLower.includes('store')) return Store;
    if (titleLower.includes('product')) return Package;
    if (titleLower.includes('payment')) return CreditCard;
    if (titleLower.includes('guidelines') || titleLower.includes('brand')) return FileText;
    if (titleLower.includes('implementation')) return Settings;
    if (titleLower.includes('identity')) return Palette;
    return FileText; // default
  };

  const serviceData: Record<string, any> = {
    'web-development': {
      title: 'Web Development',
      subtitle: 'Building Modern, Scalable Web Applications',
      description: 'We create custom web applications that are fast, secure, and built to scale. Our development team uses cutting-edge technologies to deliver solutions that meet your business objectives and exceed user expectations.',
      microStatus: 'Currently applied across active client projects',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg2MjM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      benefits: [
        'Custom web applications tailored to your needs',
        'Responsive design for all devices',
        'SEO-optimized architecture',
        'High performance and fast loading times',
        'Secure and reliable infrastructure',
        'Easy content management systems'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
      process: [
        { title: 'Requirements Analysis', description: 'We analyze your business needs and define technical specifications.' },
        { title: 'Architecture Design', description: 'We design a scalable architecture that supports future growth.' },
        { title: 'Agile Development', description: 'Iterative development with regular feedback and reviews.' },
        { title: 'Quality Assurance', description: 'Comprehensive testing to ensure bug-free deployment.' },
        { title: 'Deployment & Launch', description: 'Smooth deployment to production with zero downtime.' },
        { title: 'Ongoing Support', description: 'Continuous monitoring, updates, and maintenance.' }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      subtitle: 'Creating Beautiful & Intuitive User Experiences',
      description: 'Our design team focuses on creating interfaces that are not only visually stunning but also intuitive and user-friendly. We use data-driven insights and best practices to design experiences that engage users and drive conversions.',
      microStatus: 'Used in production environments',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4NTcxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      benefits: [
        'User-centered design approach',
        'Interactive prototypes for testing',
        'Consistent brand identity across all touchpoints',
        'Improved user engagement and retention',
        'Higher conversion rates',
        'Accessibility compliance (WCAG)'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'After Effects'],
      process: [
        { title: 'User Research', description: 'Understanding your users through interviews and data analysis.' },
        { title: 'Information Architecture', description: 'Organizing content for optimal user flow and navigation.' },
        { title: 'Wireframing', description: 'Creating low-fidelity layouts to validate structure.' },
        { title: 'Visual Design', description: 'Applying brand identity and creating high-fidelity mockups.' },
        { title: 'Prototyping', description: 'Building interactive prototypes for user testing.' },
        { title: 'Design Handoff', description: 'Detailed specifications and assets for development.' }
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      subtitle: 'Data-Driven Strategies for Online Growth',
      description: 'We help businesses grow their online presence through comprehensive digital marketing strategies. From SEO and content marketing to paid advertising and social media, we deliver measurable results that drive ROI.',
      microStatus: 'Currently applied across active client projects',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4NjI0OTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      benefits: [
        'Increased organic traffic and rankings',
        'Higher quality leads and conversions',
        'Improved brand awareness and visibility',
        'Better ROI on marketing spend',
        'Data-driven decision making',
        'Competitive market advantage'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'HubSpot', 'Google Ads', 'Facebook Ads Manager'],
      process: [
        { title: 'Market Analysis', description: 'Analyzing your market, competitors, and opportunities.' },
        { title: 'Strategy Development', description: 'Creating a comprehensive marketing roadmap.' },
        { title: 'Campaign Setup', description: 'Setting up campaigns across relevant channels.' },
        { title: 'Content Creation', description: 'Producing engaging content that resonates with your audience.' },
        { title: 'Performance Tracking', description: 'Monitoring KPIs and campaign performance.' },
        { title: 'Optimization', description: 'Continuous improvement based on data insights.' }
      ]
    },
    'mobile-app-development': {
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-Platform Mobile Solutions',
      description: 'We build mobile applications that deliver exceptional user experiences on both iOS and Android platforms. Whether you need a native app or a cross-platform solution, we have the expertise to bring your app idea to life.',
      microStatus: 'Delivered as part of ongoing support',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4NTcxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      benefits: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native',
        'Seamless device integration',
        'Offline functionality',
        'Push notifications',
        'App Store optimization and deployment'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Mobile'],
      process: [
        { title: 'Concept & Planning', description: 'Defining app features, user flows, and technical requirements.' },
        { title: 'UI/UX Design', description: 'Designing intuitive mobile interfaces.' },
        { title: 'Development', description: 'Building the app with clean, maintainable code.' },
        { title: 'Testing', description: 'Rigorous testing on multiple devices and OS versions.' },
        { title: 'App Store Submission', description: 'Handling submission to Apple App Store and Google Play.' },
        { title: 'Post-Launch Support', description: 'Updates, bug fixes, and new features.' }
      ]
    },
    'branding-strategy': {
      title: 'Branding & Strategy',
      subtitle: 'Building Strong, Memorable Brand Identities',
      description: 'We help businesses establish and strengthen their brand identity through strategic planning and creative execution. From logo design to comprehensive brand guidelines, we create cohesive brand experiences.',
      microStatus: 'Used in production environments',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4NjI0OTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      benefits: [
        'Distinctive brand identity',
        'Consistent brand messaging',
        'Increased brand recognition',
        'Competitive differentiation',
        'Clear brand positioning',
        'Comprehensive brand guidelines'
      ],
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'InDesign'],
      process: [
        { title: 'Brand Discovery', description: 'Understanding your business, values, and target audience.' },
        { title: 'Market Research', description: 'Analyzing competitors and market positioning.' },
        { title: 'Brand Strategy', description: 'Defining brand positioning, messaging, and personality.' },
        { title: 'Visual Identity', description: 'Creating logos, colors, typography, and visual elements.' },
        { title: 'Brand Guidelines', description: 'Documenting brand standards and usage rules.' },
        { title: 'Implementation', description: 'Applying brand across all touchpoints.' }
      ]
    },
    'ecommerce-solutions': {
      title: 'E-Commerce Solutions',
      subtitle: 'Complete Online Store Development',
      description: 'We build comprehensive e-commerce platforms that drive sales and provide excellent shopping experiences. From product catalogs to payment processing and order management, we handle every aspect of your online store.',
      microStatus: 'Delivered as part of ongoing support',
      image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3Njg1ODE5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      benefits: [
        'Secure payment gateway integration',
        'Inventory management system',
        'Product catalog management',
        'Shopping cart optimization',
        'Order tracking and management',
        'Customer account features'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Square'],
      process: [
        { title: 'Platform Selection', description: 'Choosing the right e-commerce platform for your needs.' },
        { title: 'Store Design', description: 'Designing an attractive and conversion-optimized store.' },
        { title: 'Product Setup', description: 'Setting up products, categories, and attributes.' },
        { title: 'Payment Integration', description: 'Integrating secure payment gateways.' },
        { title: 'Testing', description: 'Testing checkout flow and user experience.' },
        { title: 'Launch & Marketing', description: 'Going live and implementing marketing strategies.' }
      ]
    }
  };

  const service = serviceData[serviceId || ''] || serviceData['web-development'];

  // LAYOUT 1: Web Development - Classic Layout with Code Focus
  if (serviceId === 'web-development') {
    return (
      <div className="bg-[#0F0F0F] text-white">
        {/* Back Button */}
        <div className="pt-24 pb-8 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp} className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">{service.title}</h1>
                <p className="text-2xl text-[#FF7029] font-medium">{service.subtitle}</p>
                <p className="text-lg text-neutral-400 leading-relaxed">{service.description}</p>
                {service.microStatus && (
                  <p className="text-sm text-neutral-500 italic border-l-2 border-[#FF7029] pl-4">{service.microStatus}</p>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-opacity mt-4">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Key <span className="text-[#FF7029]">Benefits</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-6">
                  <div className="w-6 h-6 bg-[#FF7029] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Technologies We <span className="text-[#FF7029]">Use</span></h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <motion.div key={index} variants={fadeUp} whileHover={{ scale: 1.05 }} className="bg-[#1A1A1A] border border-neutral-800 rounded-full px-8 py-4 text-lg hover:border-[#FF7029] transition-colors">
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={detailsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our <span className="text-[#FF7029]">Process</span></h2>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">A structured approach that ensures quality, transparency, and successful outcomes.</p>
            </motion.div>

            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={staggerContainer} className="space-y-6">
              {service.process.map((step: any, index: number) => {
                const StepIcon = getProcessIcon(step.title);
                return (
                  <motion.div key={index} variants={fadeUp} whileHover={{ x: 10 }} className="bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-8 hover:border-[#FF7029] transition-all group">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#FF7029] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                        <StepIcon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#FF7029] font-bold text-sm">Step {index + 1}</span>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                      </div>
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
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Ready to Get <span className="text-[#FF7029]">Started</span>?</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">Let's discuss your project and how we can help you achieve your goals.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity">
                  Contact Us
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // LAYOUT 2: UI/UX Design - Image First, Creative Layout
  if (serviceId === 'ui-ux-design') {
    return (
      <div className="bg-[#0F0F0F] text-white">
        <div className="pt-24 pb-8 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
          </div>
        </div>

        {/* Hero - Image First */}
        <section ref={heroRef} className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6">{service.title}</h1>
              <p className="text-3xl text-[#FF7029] font-medium">{service.subtitle}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 1, delay: 0.2 }} className="relative mb-12">
              <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-neutral-900">
                <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-neutral-400 leading-relaxed mb-8">{service.description}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process - Grid Layout */}
        <section ref={detailsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Design <span className="text-[#FF7029]">Process</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step: any, index: number) => {
                const StepIcon = getProcessIcon(step.title);
                return (
                  <motion.div key={index} variants={fadeUp} whileHover={{ y: -5 }} className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-all">
                    <div className="w-16 h-16 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                      <StepIcon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[#FF7029] font-bold text-sm mb-2 block">Phase {index + 1}</span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Benefits - 2 Column Layout */}
        <section ref={benefitsRef} className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={fadeUp}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose Our <span className="text-[#FF7029]">Design Services</span></h2>
                <p className="text-xl text-neutral-400 mb-8">We create experiences that users love and businesses benefit from.</p>
              </motion.div>

              <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={staggerContainer} className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-neutral-300 leading-relaxed text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12">Our <span className="text-[#FF7029]">Toolkit</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }} className="bg-[#0F0F0F] border border-neutral-800 rounded-2xl px-8 py-5 text-lg hover:border-[#FF7029] transition-colors">
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Let's Create Something <span className="text-[#FF7029]">Amazing</span></h2>
            <p className="text-xl text-neutral-400 mb-8">Transform your digital presence with world-class design.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity">
              Get In Touch
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // LAYOUT 3: Digital Marketing - Stats & Results Focused
  if (serviceId === 'digital-marketing') {
    const stats = [
      { value: '300%', label: 'Average ROI Increase' },
      { value: '2.5M+', label: 'Leads Generated' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '150+', label: 'Successful Campaigns' }
    ];

    return (
      <div className="bg-[#0F0F0F] text-white">
        <div className="pt-24 pb-8 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section ref={heroRef} className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">{service.title}</h1>
              <p className="text-3xl text-[#FF7029] font-medium mb-8">{service.subtitle}</p>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-4xl mx-auto mb-12">{service.description}</p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeUp} className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-colors">
                  <div className="text-5xl font-bold text-[#FF7029] mb-2">{stat.value}</div>
                  <div className="text-neutral-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.6 }}>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                Grow Your Business
                <TrendingUp className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">What We <span className="text-[#FF7029]">Deliver</span></h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-all group">
                  <div className="w-12 h-12 bg-[#FF7029] bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-neutral-200 text-lg leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section ref={detailsRef} className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Marketing <span className="text-[#FF7029]">Approach</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={staggerContainer} className="space-y-8">
              {service.process.map((step: any, index: number) => {
                const StepIcon = getProcessIcon(step.title);
                return (
                  <motion.div key={index} variants={fadeUp} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#FF7029] rounded-2xl flex items-center justify-center">
                        <StepIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-neutral-400 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Marketing <span className="text-[#FF7029]">Tools</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <div key={index} className="bg-[#0F0F0F] border border-neutral-800 rounded-full px-8 py-4 text-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to <span className="text-[#FF7029]">Scale</span>?</h2>
            <p className="text-xl text-neutral-400 mb-8">Let's create a data-driven marketing strategy that delivers results.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity">
              Book a Strategy Call
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // LAYOUT 4: Mobile App Development - Feature Showcase
  if (serviceId === 'mobile-app-development') {
    return (
      <div className="bg-[#0F0F0F] text-white">
        <div className="pt-24 pb-8 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
          </div>
        </div>

        {/* Hero - Split Layout */}
        <section ref={heroRef} className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-[#FF7029] bg-opacity-10 rounded-full px-6 py-3 mb-6">
                  <Smartphone className="w-5 h-5 text-[#FF7029]" />
                  <span className="text-white font-medium">iOS & Android</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">{service.title}</h1>
                <p className="text-2xl text-[#FF7029] font-medium mb-6">{service.subtitle}</p>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                  Build Your App
                  <Rocket className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8 }} className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-neutral-900">
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={benefitsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Powerful <span className="text-[#FF7029]">Features</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 gap-8">
              {service.benefits.map((benefit: string, index: number) => {
                // Map icons to each benefit
                const getFeatureIcon = (idx: number) => {
                  const icons = [Smartphone, Code, Settings, Zap, Star, Rocket];
                  return icons[idx] || Smartphone;
                };
                const FeatureIcon = getFeatureIcon(index);
                
                return (
                  <motion.div key={index} variants={fadeUp} whileHover={{ scale: 1.02 }} className="flex items-start gap-6 bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-all">
                    <div className="w-14 h-14 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FeatureIcon className="w-7 h-7 text-[#FF7029]" />
                    </div>
                    <div>
                      <p className="text-neutral-200 text-xl leading-relaxed">{benefit}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section ref={detailsRef} className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Development <span className="text-[#FF7029]">Journey</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step: any, index: number) => {
                const StepIcon = getProcessIcon(step.title);
                return (
                  <motion.div key={index} variants={fadeUp} className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-colors">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-[#FF7029] rounded-xl flex items-center justify-center">
                        <StepIcon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-6xl font-bold text-neutral-800">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Tech <span className="text-[#FF7029]">Stack</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <div key={index} className="bg-[#0F0F0F] border border-neutral-800 rounded-2xl px-8 py-5 text-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Build The Next Big <span className="text-[#FF7029]">App</span></h2>
            <p className="text-xl text-neutral-400 mb-8">From concept to App Store, we'll bring your vision to life.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity">
              Start Development
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // LAYOUT 5: Branding & Strategy - Creative Portfolio Style
  if (serviceId === 'branding-strategy') {
    return (
      <div className="bg-[#0F0F0F] text-white">
        <div className="pt-24 pb-8 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
          </div>
        </div>

        {/* Hero - Centered */}
        <section ref={heroRef} className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-[#FF7029] bg-opacity-10 rounded-full px-6 py-3 mb-6">
                <Palette className="w-5 h-5 text-[#FF7029]" />
                <span className="text-[#FF7029] font-medium">Brand Identity</span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold leading-tight mb-6">{service.title}</h1>
              <p className="text-3xl text-[#FF7029] font-medium mb-8">{service.subtitle}</p>
              <p className="text-xl text-neutral-400 leading-relaxed mb-12">{service.description}</p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                Build Your Brand
                <Star className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits - Masonry Style */}
        <section ref={benefitsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Brand <span className="text-[#FF7029]">Advantages</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <motion.div key={index} variants={fadeUp} whileHover={{ y: -8 }} className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-10 hover:border-[#FF7029] transition-all">
                  <div className="w-16 h-16 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-neutral-200 text-xl leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process - Creative Cards */}
        <section ref={detailsRef} className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Brand Building <span className="text-[#FF7029]">Steps</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step: any, index: number) => {
                const StepIcon = getProcessIcon(step.title);
                return (
                  <motion.div key={index} variants={fadeUp} whileHover={{ scale: 1.05 }} className="relative bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8 overflow-hidden hover:border-[#FF7029] transition-all group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7029] opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                        <StepIcon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-[#FF7029] font-bold text-sm mb-2 block">Step {index + 1}</span>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Design <span className="text-[#FF7029]">Tools</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <div key={index} className="bg-[#0F0F0F] border border-neutral-800 rounded-full px-8 py-5 text-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Create Your <span className="text-[#FF7029]">Legacy</span></h2>
            <p className="text-xl text-neutral-400 mb-8">Let's build a brand that stands out and resonates with your audience.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity">
              Start Your Brand Journey
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // LAYOUT 6: E-Commerce Solutions - Product Showcase Style
  if (serviceId === 'ecommerce-solutions') {
    const features = [
      { icon: ShoppingCart, title: 'Shopping Cart', desc: 'Optimized checkout flow' },
      { icon: CreditCard, title: 'Payments', desc: 'Secure payment processing' },
      { icon: Package, title: 'Inventory', desc: 'Real-time stock management' },
      { icon: Users, title: 'Customers', desc: 'Account & order tracking' }
    ];

    return (
      <div className="bg-[#0F0F0F] text-white">
        <div className="pt-24 pb-8 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section ref={heroRef} className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-[#FF7029] bg-opacity-10 rounded-full px-6 py-3 mb-6">
                  <Store className="w-5 h-5 text-[#FF7029]" />
                  <span className="text-[#FF7029] font-medium">Online Store</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">{service.title}</h1>
                <p className="text-2xl text-[#FF7029] font-medium mb-6">{service.subtitle}</p>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">{service.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} transition={{ duration: 0.8 }} className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features - Icon Grid */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Core <span className="text-[#FF7029]">Features</span></h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 text-center hover:border-[#FF7029] transition-colors">
                  <div className="w-16 h-16 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Everything You <span className="text-[#FF7029]">Need</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={benefitsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-neutral-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section ref={detailsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Launch <span className="text-[#FF7029]">Process</span></h2>
            </motion.div>

            <motion.div initial="hidden" animate={detailsInView ? "visible" : "hidden"} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step: any, index: number) => {
                const StepIcon = getProcessIcon(step.title);
                return (
                  <motion.div key={index} variants={fadeUp} className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-all">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-[#FF7029] bg-opacity-10 rounded-xl flex items-center justify-center">
                        <StepIcon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-neutral-800">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Platforms We <span className="text-[#FF7029]">Support</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <div key={index} className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl px-8 py-5 text-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Launch Your <span className="text-[#FF7029]">Store</span> Today</h2>
            <p className="text-xl text-neutral-400 mb-8">Transform your business with a powerful e-commerce platform.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity">
              Get Started Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Default fallback
  return null;
}
