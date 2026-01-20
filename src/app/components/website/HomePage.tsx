import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import OurClientsSection from '@/app/components/website/OurClientsSection';
import MicroStatus from '@/app/components/website/MicroStatus';
import LiveActivityInline from '@/app/components/website/LiveActivityInline';
import heroImage from '../../../assets/af7fa589b5a042a3cc468d2b6f2d36efcdac78cd.png';
import testimonialAvatar from '../../../assets/ab2383425def2f19100606a4bdddb972cb9d070f.png';
import amalRohailAvatar from '../../../assets/003c57366845b26630d9949f2b4a1ba8a55eb5cc.png';
import julieMassicotteAvatar from '../../../assets/59f008987f9297520dbc01f00c39b8d3cefdd05f.png';
import mattShawAvatar from '../../../assets/a9540f98905da8e58a31a5f8ecfed882149dac56.png';
import andreaMirielloAvatar from '../../../assets/a40c2cae1c83068cd46e19eeadf570cd0a0fc794.png';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Custom easing
const customEase = [0.25, 0.1, 0.25, 1] as const;

// Color constants (using hex/rgb instead of oklch for animations)
const theme = {
  background: '#000000',
  card: '#1A1A1A',
  border: '#262626',
  accent: '#FF7029',
  accentHover: '#FF9F0A',
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: customEase }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: customEase }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: customEase }
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

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, -50]);
  const ctaParallax = useTransform(scrollY, [800, 1600], [0, -80]);
  
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const awardsRef = useRef(null);
  const ctaRef = useRef(null);
  const testimonialsRef = useRef(null);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const awardsInView = useInView(awardsRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.4 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const footerInView = useInView(footerRef, { once: true, amount: 0.2 });

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsScrollRef.current) {
      const scrollAmount = 340; // Approximate card width + gap
      testimonialsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    {
      number: '01',
      title: 'Brand Strategy',
      description: 'Crafting compelling brand identities that resonate with your audience and stand out in the market.',
      microLabel: 'Actively used in client projects'
    },
    {
      number: '02',
      title: 'Web Development',
      description: 'Building modern, responsive websites with cutting-edge technologies for optimal performance.',
      microLabel: 'Applied in ongoing builds'
    },
    {
      number: '03',
      title: 'Digital Growth',
      description: 'Data-driven strategies to scale your business and maximize your digital presence.',
      microLabel: 'Actively used in client projects'
    }
  ];

  const awards = [
    {
      year: '2025',
      title: 'Integrated Digital Solutions',
      description: 'End-to-end delivery covering UI/UX design, full-stack development, and digital marketing.'
    },
    {
      year: '2024',
      title: 'Scalable Web & App Development',
      description: 'Built fast, secure, and scalable platforms tailored to real business needs.'
    },
    {
      year: '2024',
      title: 'Performance-Driven Marketing',
      description: 'Executed SEO and marketing strategies focused on visibility, traffic, and conversions.'
    },
    {
      year: '2023',
      title: 'User-Centered Design Approach',
      description: 'Designed intuitive, conversion-focused interfaces based on user behavior and goals.'
    },
    {
      year: '2023',
      title: 'Long-Term Client Partnerships',
      description: 'Supported brands beyond launch with continuous improvement and growth strategies.'
    }
  ];

  const testimonials = [
    {
      avatar: testimonialAvatar,
      quote: 'Core Grow Vision created a beautiful business card for me. I feel proud giving it out. He was flexible and made adjustments quickly. I have worked with Arun before and will work with him again. Highly recommend.',
      name: 'Bonnie Mioduchoski',
      role: 'Founder of Reparenting',
      rating: 5
    },
    {
      avatar: amalRohailAvatar,
      quote: 'Team CGV is an excellent designer with a great tendency to adapt and with a quick tat. He quickly understood my requirements and delivered a good product.',
      name: 'Amal Rohail',
      role: 'Founder of Hytus',
      rating: 5
    },
    {
      avatar: julieMassicotteAvatar,
      quote: 'This was the second time I worked with Team CGV on a logo. They delivered on my requests quickly and worked closely with me to ensure the logo aligned with my needs, and I love the final result. I will work with Team CGV again and highly recommend them for your graphic design needs.',
      name: 'Julie Massicotte',
      role: 'Founder of Repro Net',
      rating: 5
    },
    {
      avatar: mattShawAvatar,
      quote: 'Core Grow Vision is a skilled, patient, and reliable graphic design team. Team CGV followed the instructions carefully, communicated clearly, and delivered a high-quality brochure before the deadline. It was easy and pleasant working with them. Highly recommended.',
      name: 'Matt Shaw',
      role: 'Olivos Group',
      rating: 5
    },
    {
      avatar: andreaMirielloAvatar,
      quote: 'Team CGV delivered strong work on this web design project. Their communication was excellent, all deadlines were met, and their skills were solid and reliable. I enjoyed collaborating with Team CGV and will definitely have more projects for them in the future.',
      name: 'Andrea Miriello',
      role: 'Member of the Italian Psychological Association',
      rating: 5
    }
  ];

  return (
    <div className="bg-[#0F0F0F] text-white overflow-hidden">
      {/* SECTION 1 - HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: heroParallax }}
        >
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #FF7029 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                Brand & Web Solutions That Drive{' '}
                <span className="text-[#FF7029]">Impact</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
                className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-xl"
              >
                We create digital experiences that transform businesses and connect with audiences on a deeper level. From strategy to execution, we deliver excellence.
              </motion.p>

              {/* Micro Status Component */}
              <MicroStatus />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: customEase }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    See our works
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              {/* Oversized Name Typography Behind */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: customEase }}
                className="absolute -top-20 -right-12 z-0 hidden xl:block"
              >
                <h2 className="text-[180px] font-bold text-neutral-900 leading-none select-none">
                  CGV
                </h2>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: customEase }}
                className="relative z-10"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900">
                  <ImageWithFallback
                    src={heroImage}
                    alt="Creative Professional"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Accent */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF7029] rounded-3xl opacity-20 blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENTLY DELIVERED STRIP WITH LIVE ACTIVITY */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-t border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <div className="text-lg sm:text-xl leading-relaxed flex items-center justify-center flex-wrap">
              <LiveActivityInline />
            </div>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Recently delivered digital solutions across{' '}
              <span className="text-[#FF7029]">healthcare</span>,{' '}
              <span className="text-[#FF7029]">fintech</span>,{' '}
              <span className="text-[#FF7029]">e-commerce</span> &{' '}
              <span className="text-[#FF7029]">professional services</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - THREE-STEP FEATURE GRID */}
      <section ref={featuresRef} className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Design Solutions That Elevate Your Brand
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
              We combine creativity with strategic thinking to deliver results that matter. Every project is crafted with precision and passion.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-10 hover:border-[#FF6A2A] transition-colors group"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="text-7xl font-bold text-neutral-800 group-hover:text-[#FF6A2A] transition-colors mb-6"
                >
                  {feature.number}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm text-[#FF7029] font-medium mb-3 italic">{feature.microLabel}</p>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - AWARDS SECTION */}
      <section ref={awardsRef} className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={awardsInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Design, Development & Marketing That Drive Real{' '}
                <span className="text-[#FF7029]">Growth</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
                We help businesses grow by combining thoughtful design, reliable development, and performance-driven marketing. Our work is focused on clarity, scalability, and measurable impact.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors"
                >
                  Case Studies
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Awards List */}
            <motion.div
              initial="hidden"
              animate={awardsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-8"
            >
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  className="border-b border-neutral-800 pb-8 last:border-b-0"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={awardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-6"
                  >
                    <span className="text-5xl font-bold text-neutral-700 min-w-[100px]">
                      {award.year}
                    </span>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                      <p className="text-neutral-400">{award.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - TESTIMONIALS */}
      <section ref={testimonialsRef} className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted by Brands, Loved by{' '}
              <span className="text-[#FF6A2A]">Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            ref={testimonialsScrollRef}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF6A2A] transition-colors flex flex-col min-w-[300px] max-w-[340px] h-[500px] flex-shrink-0"
              >
                {/* Avatar and Rating Row */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={testimonialsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.15 }}
                    className="w-14 h-14 rounded-full overflow-hidden bg-neutral-800"
                  >
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={testimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 fill-[#FF6A2A] text-[#FF6A2A]" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Name and Role */}
                <div className="border-t border-neutral-800 pt-4 mt-auto">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => scrollTestimonials('left')}
              className="bg-[#FF7029] text-white px-4 py-2 rounded-full hover:bg-[#FF9F0A] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTestimonials('right')}
              className="bg-[#FF7029] text-white px-4 py-2 rounded-full hover:bg-[#FF9F0A] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* OUR CLIENTS SECTION */}
      <OurClientsSection />

      {/* SECTION 6 - FULLSCREEN CTA WITH IMAGE */}
      <section ref={ctaRef} className="relative py-48 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: ctaParallax }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-transparent to-[#0F0F0F] z-10"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558478551-1a378f63328e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NTM2Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="relative z-20 text-center max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Let's Bring Your Vision to{' '}
            <span className="text-[#FF6A2A]">Life</span>
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create something extraordinary together.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-12 py-6 rounded-full text-xl font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}