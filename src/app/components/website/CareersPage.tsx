import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Clock, Heart, Lightbulb, Users, TrendingUp } from 'lucide-react';
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

export default function CareersPage() {
  const heroRef = useRef(null);
  const jobsRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const jobsInView = useInView(jobsRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });

  const [filter, setFilter] = useState('all');

  const departments = ['all', 'engineering', 'design', 'marketing', 'business'];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'Remote / Mohali, Punjab',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'We are looking for an experienced Full-Stack Developer to join our engineering team and help build scalable web applications.',
      requirements: [
        '5+ years of experience in web development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote / Mohali, Punjab',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful and intuitive user experiences for our clients across various industries.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating user-centered design',
        'Experience with design systems and prototyping'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      location: 'Remote / Mohali, Punjab',
      type: 'Full-time',
      salary: '$70k - $100k',
      description: 'We need a creative marketing specialist to develop and execute digital marketing campaigns that drive results.',
      requirements: [
        '3+ years of digital marketing experience',
        'Expertise in SEO, SEM, and social media marketing',
        'Experience with Google Analytics and marketing tools',
        'Strong analytical and creative skills'
      ]
    },
    {
      id: 4,
      title: 'Frontend Developer',
      department: 'engineering',
      location: 'Remote / Mohali, Punjab',
      type: 'Full-time',
      salary: '$90k - $140k',
      description: 'Looking for a talented Frontend Developer to create responsive and performant user interfaces.',
      requirements: [
        '3+ years of frontend development experience',
        'Expert knowledge of React, TypeScript, and CSS',
        'Experience with modern build tools and CI/CD',
        'Attention to detail and passion for great UX'
      ]
    },
    {
      id: 5,
      title: 'Product Designer',
      department: 'design',
      location: 'Remote / Mohali, Punjab',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Join us as a Product Designer to shape the future of digital products through thoughtful design.',
      requirements: [
        '4+ years of product design experience',
        'Strong portfolio of shipped products',
        'Experience with user research and testing',
        'Excellent communication and collaboration skills'
      ]
    },
    {
      id: 6,
      title: 'Business Development Manager',
      department: 'business',
      location: 'Hybrid / Mohali, Punjab',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Drive business growth by identifying new opportunities and building strong client relationships.',
      requirements: [
        '5+ years of business development experience',
        'Proven track record in B2B sales',
        'Strong network in the tech industry',
        'Excellent negotiation and presentation skills'
      ]
    },
    {
      id: 7,
      title: 'Junior Backend Developer',
      department: 'engineering',
      location: 'Remote / Mohali, Punjab',
      type: 'Full-time',
      salary: '$70k - $95k',
      description: 'Great opportunity for a junior developer to grow their skills building scalable backend systems.',
      requirements: [
        '1-2 years of backend development experience',
        'Knowledge of Node.js, Python, or similar',
        'Understanding of databases and APIs',
        'Eagerness to learn and grow'
      ]
    },
    {
      id: 8,
      title: 'Content Marketing Manager',
      department: 'marketing',
      location: 'Remote / Denver, CO',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Lead our content strategy to engage audiences and drive brand awareness through compelling storytelling.',
      requirements: [
        '4+ years of content marketing experience',
        'Excellent writing and editing skills',
        'Experience with content management systems',
        'Data-driven approach to content strategy'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development budget and opportunities to advance your career.'
    },
    {
      icon: Users,
      title: 'Great Team Culture',
      description: 'Work with talented, passionate people in a collaborative environment.'
    },
    {
      icon: Lightbulb,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance.'
    }
  ];

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === filter);

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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Join Our <span className="text-[#FF7029]">Team</span>
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
                Build your career with us and help create innovative digital solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-[#FF7029] mb-1">20+</div>
                  <div className="text-neutral-400">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF7029] mb-1">8+</div>
                  <div className="text-neutral-400">Open Positions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF7029] mb-1">100%</div>
                  <div className="text-neutral-400">Remote Friendly</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2ODU1MDAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Team"
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Work <span className="text-[#FF7029]">With Us</span>?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed">
              We offer more than just a job – we offer a place to grow, innovate, and make an impact.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-[#0F0F0F] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-colors"
                >
                  <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#FF7029]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pt-20 pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Open <span className="text-[#FF7029]">Positions</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setFilter(department)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === department
                    ? 'bg-[#FF7029] text-white'
                    : 'bg-[#1A1A1A] text-neutral-400 hover:bg-[#262626] border border-neutral-800'
                }`}
              >
                {department === 'all' ? 'All Departments' : department.charAt(0).toUpperCase() + department.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jobs List */}
      <section ref={jobsRef} className="py-12 px-6 sm:px-8 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={jobsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-6"
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                whileHover={{ x: 5 }}
                className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl p-8 hover:border-[#FF7029] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{job.description}</p>
                    </div>

                    {/* Job Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="capitalize">{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-6">
                      <h4 className="text-sm font-bold text-[#FF7029] mb-3">KEY REQUIREMENTS</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
                            <div className="w-1.5 h-1.5 bg-[#FF7029] rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap self-start"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Don't See the Right <span className="text-[#FF7029]">Position</span>?
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-12 py-6 rounded-full text-xl font-medium hover:bg-neutral-200 transition-colors"
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}