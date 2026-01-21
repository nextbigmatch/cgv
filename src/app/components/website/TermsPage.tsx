import { motion } from 'motion/react';

export default function TermsPage() {
  const sections = [
    {
      title: 'Use of the Website',
      items: [
        'Use the website for lawful purposes only',
        "Do not attempt to disrupt or interfere with the website's functionality",
        'Do not copy, misuse, or distribute content without permission',
        'Access may be restricted if misuse or harmful activity is detected'
      ]
    },
    {
      title: 'Intellectual Property',
      description: 'All content on this website, including text, visuals, graphics, logos, and design elements, is the property of Core Grow Vision unless stated otherwise. You may not reproduce, modify, or distribute any material from this website without prior written consent.'
    },
    {
      title: 'Services & Information',
      description: 'The information provided on this website is for general understanding of our services. While we aim to keep all information accurate and up to date, we do not guarantee that all content will always be complete or current. Service details, pricing, timelines, and deliverables are finalized only through direct communication and written agreements.'
    },
    {
      title: 'Third-Party Links',
      description: 'Our website may contain links to third-party websites for reference or convenience. Core Grow Vision is not responsible for the content, policies, or practices of these external websites.'
    },
    {
      title: 'Limitation of Liability',
      description: 'Core Grow Vision will not be liable for any direct or indirect damages arising from the use or inability to use this website. Use of the website is at your own discretion and risk.'
    },
    {
      title: 'Changes to These Terms',
      description: 'We may update these Terms & Conditions from time to time. Any changes will be posted on this page, and continued use of the website implies acceptance of the updated terms.'
    },
    {
      title: 'Governing Law',
      description: 'These terms are governed by the laws applicable in India. Any disputes related to the use of this website will be subject to the jurisdiction of local courts.'
    },
    {
      title: 'Contact',
      description: 'If you have any questions regarding these terms, you can contact us through the details provided on our website.'
    }
  ];

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <section className="relative pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #FF7029 1px, transparent 0)`,
              backgroundSize: '38px 38px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          >
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            Last updated: 2026
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-neutral-300 text-lg leading-relaxed"
          >
            Welcome to Core Grow Vision. By accessing or using our website, you agree to the terms outlined below. These terms are intended to protect both you and us, and to ensure a transparent and respectful experience for all visitors.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#111111] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.8)]"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FF7029]">
                {section.title}
              </h2>
              {section.items ? (
                <ul className="list-disc list-inside space-y-2 text-neutral-300 leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-300 leading-relaxed">
                  {section.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

