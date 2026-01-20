import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
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

export default function BlogPage() {
  const heroRef = useRef(null);
  const postsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const postsInView = useInView(postsRef, { once: true, amount: 0.2 });

  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web-development', 'design', 'marketing', 'technology'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2026',
      slug: 'future-web-development-2026',
      category: 'web-development',
      excerpt: 'Explore the emerging trends and technologies that will shape web development in 2026, from AI integration to Web3 innovations.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg2MjM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Sarah Chen',
      date: 'January 15, 2026',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How AI is Transforming Digital Marketing Strategies',
      slug: 'ai-transforming-digital-marketing',
      category: 'marketing',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing, from personalized campaigns to predictive analytics.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2ODUyNjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Michael Rodriguez',
      date: 'January 12, 2026',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 3,
      title: '10 UI/UX Design Principles Every Designer Should Know',
      slug: 'ui-ux-design-principles',
      category: 'design',
      excerpt: 'Master the fundamental principles of UI/UX design that create intuitive, engaging user experiences.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4NTcxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Emma Taylor',
      date: 'January 10, 2026',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications: Best Practices',
      slug: 'scalable-web-applications-best-practices',
      category: 'web-development',
      excerpt: 'Learn the architecture patterns and best practices for building web applications that scale efficiently.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4NjI0OTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'David Kim',
      date: 'January 8, 2026',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Voice Search: Optimizing for the Future',
      slug: 'voice-search-optimization',
      category: 'marketing',
      excerpt: 'Voice search is changing SEO. Learn how to optimize your content for voice-activated devices and assistants.',
      image: 'https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB0cmVuZHN8ZW58MXx8fHwxNzY4NjI3NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Lisa Anderson',
      date: 'January 5, 2026',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Cybersecurity in 2026: Protecting Your Digital Assets',
      slug: 'cybersecurity-2026',
      category: 'technology',
      excerpt: 'Stay ahead of cyber threats with these essential security practices for modern web applications.',
      image: 'https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODUyODY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'James Wilson',
      date: 'January 3, 2026',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Minimalist Design: Less is More in Modern Web Design',
      slug: 'minimalist-web-design',
      category: 'design',
      excerpt: 'Explore the principles of minimalist design and how it creates powerful, focused user experiences.',
      image: 'https://images.unsplash.com/photo-1571916234808-adf437ac1644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwYmxvZ3xlbnwxfHx8fDE3Njg1MzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Sophie Martin',
      date: 'December 30, 2025',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Progressive Web Apps: The Best of Both Worlds',
      slug: 'progressive-web-apps',
      category: 'web-development',
      excerpt: 'Learn why PWAs are becoming the preferred choice for delivering app-like experiences on the web.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODUzNjUwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Alex Thompson',
      date: 'December 28, 2025',
      readTime: '11 min read',
      featured: false
    },
    {
      id: 9,
      title: 'Content Marketing Strategies That Actually Work',
      slug: 'content-marketing-strategies',
      category: 'marketing',
      excerpt: 'Proven content marketing strategies to attract, engage, and convert your target audience.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4NjI0OTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Rachel Green',
      date: 'December 25, 2025',
      readTime: '8 min read',
      featured: false
    }
  ];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              Insights & <span className="text-[#FF7029]">Resources</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world of digital technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {filter === 'all' && (
        <section className="pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-12"
            >
              Featured <span className="text-[#FF7029]">Posts</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl overflow-hidden hover:border-[#FF7029] transition-all">
                      {/* Post Image */}
                      <div className="relative aspect-video overflow-hidden bg-neutral-900">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6 bg-[#FF7029] bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-white text-sm font-medium">
                            {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-8">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-[#FF7029] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-sm text-neutral-500">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4"
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
                {category === 'all' ? 'All Posts' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={postsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-[#1A1A1A] border border-neutral-800 rounded-3xl overflow-hidden hover:border-[#FF7029] transition-all h-full flex flex-col">
                    {/* Post Image */}
                    <div className="relative aspect-video overflow-hidden bg-neutral-900">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-[#FF7029] bg-opacity-90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-white text-xs font-medium">
                          {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF7029] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed mb-6 text-sm flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-col gap-2 text-xs text-neutral-500">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              Subscribe to Our <span className="text-[#FF7029]">Newsletter</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Get the latest insights, tutorials, and industry news delivered straight to your inbox.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex gap-4 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0F0F0F] border border-neutral-800 rounded-full px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF7029] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}