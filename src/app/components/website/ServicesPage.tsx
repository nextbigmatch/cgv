import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, TrendingUp, Smartphone, Globe, ShoppingCart, ArrowRight, CheckCircle2, Search, Pencil, Rocket, Headphones } from 'lucide-react';
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
      staggerChildren: 0.12
    }
  }
};

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.3 });

  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance, scalability, and user experience.',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY4NTYzMzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Deployment', 'API Integration']
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to enhance user engagement and drive conversions.',
      image: 'https://images.unsplash.com/photo-1764406562219-105937cc3f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2ODYzMjM2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your online visibility and generate qualified leads.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2ODU2MDM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'PPC Campaigns']
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3Njg2MzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      id: 'branding-strategy',
      icon: Globe,
      title: 'Branding & Strategy',
      description: 'Comprehensive brand identity and strategy development to differentiate your business in the market.',
      image: 'https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2ODU1MDE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Market Research']
    },
    {
      id: 'ecommerce-solutions',
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with integrated payment systems and inventory management.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3Njg2MzIzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Shopify Development', 'WooCommerce', 'Custom Platforms', 'Payment Integration']
    }
  ];

  const process = [
    {
      step: '01',
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements to create a solid foundation.'
    },
    {
      step: '02',
      icon: Pencil,
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive interfaces and interactive prototypes for your review and feedback.'
    },
    {
      step: '03',
      icon: Code,
      title: 'Development & Testing',
      description: 'Our developers build your solution using best practices, with rigorous testing to ensure quality and performance.'
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We handle the deployment and provide ongoing support to ensure your success long after launch.'
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
              Our <span className="text-[#FF7029]">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
              From concept to launch, we provide end-to-end digital solutions tailored to your unique business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link to={`/services/${service.id}`}>
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl overflow-hidden hover:border-[#FF7029] transition-all">
                      {/* Service Image */}
                      <div className="relative aspect-video overflow-hidden bg-neutral-900">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute top-6 right-6 w-14 h-14 bg-[#FF7029] bg-opacity-90 rounded-2xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#FF7029] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                              <span className="text-sm text-neutral-500">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Link */}
                        <div className="flex items-center gap-2 text-[#FF7029] font-medium group-hover:gap-4 transition-all">
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-[#FF7029]">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-neutral-800"></div>
                  )}

                  <div className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 relative z-10 hover:border-[#FF7029] transition-colors group">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="text-5xl font-bold text-neutral-800 mb-4 group-hover:text-neutral-700 transition-colors">
                      {item.step}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
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
              Ready to Start Your <span className="text-[#FF7029]">Project</span>?
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}