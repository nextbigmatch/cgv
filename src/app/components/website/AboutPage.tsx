import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Award, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import aboutHeroImage from 'figma:asset/7f7e2102f963148b116c6f5561563ca02611b3a7.png';

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
      staggerChildren: 0.15
    }
  }
};

export default function AboutPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real business results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, working closely with clients to understand their vision and bring it to life.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve, embracing new technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and commitment to delivering on our promises every time.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Team Members' }
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Digital Excellence <span className="text-[#FF7029]">Since 2020</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
              We are Core Grow Vision, a forward-thinking IT company dedicated to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-neutral-900"
          >
            <ImageWithFallback
              src={aboutHeroImage}
              alt="Core Grow Vision Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center"
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

      {/* Core Team Presence Block */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-2xl sm:text-3xl text-neutral-300 leading-relaxed">
              Projects are led and delivered by our core in-house team — no middle layers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We're Doing This Month */}
      <section className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center">
              What We're Doing <span className="text-[#FF7029]\">This Month</span>
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 hover:border-[#FF7029] transition-colors"
              >
                <div className="w-2 h-2 bg-[#FF7029] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Launching scalable web platforms
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 hover:border-[#FF7029] transition-colors"
              >
                <div className="w-2 h-2 bg-[#FF7029] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Refining brand systems for growth
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 hover:border-[#FF7029] transition-colors"
              >
                <div className="w-2 h-2 bg-[#FF7029] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Optimizing performance & conversion flows
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  Our <span className="text-[#FF7029]">Mission</span>
                </h2>
                <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create lasting impact in the digital landscape.
                </p>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  Our <span className="text-[#FF7029]">Vision</span>
                </h2>
                <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
                  To be the leading IT partner for businesses worldwide, recognized for our innovation, excellence, and commitment to transforming visions into reality.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4NjA3ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our Mission"
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
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF7029] rounded-3xl opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Core <span className="text-[#FF7029]">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
              These principles guide everything we do, from how we work with clients to how we build solutions.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-colors"
                >
                  <div className="w-16 h-16 bg-[#FF7029] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square bg-neutral-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg2MjM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Why Choose Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Why Choose <span className="text-[#FF7029]">Core Grow Vision</span>?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Over 100 successful projects delivered to satisfied clients across various industries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      We use the latest tools and technologies to ensure your solution is future-proof and scalable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Our team is always available to support you, from initial consultation to post-launch maintenance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Results-Driven Approach</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      We focus on delivering measurable results that contribute directly to your business goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}