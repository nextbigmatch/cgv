import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      items: [
        'When you fill out a contact or consultation form',
        'When you subscribe to updates',
        'When you communicate with us via email or phone'
      ],
      footnote: 'This information may include your name, email address, phone number, company name, and project-related details.'
    },
    {
      title: 'How We Use Your Information',
      items: [
        'Respond to your inquiries',
        'Communicate about services or consultations',
        'Improve our website and services',
        'Provide relevant updates when requested'
      ],
      footnote: 'We do not sell, rent, or trade your personal data.'
    },
    {
      title: 'Data Protection',
      description: 'We take reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure. Access to personal information is limited to authorized team members only.'
    },
    {
      title: 'Cookies',
      description: 'Our website may use cookies to improve browsing experience and understand how visitors interact with our site. Cookies do not collect personal data unless you choose to provide it. You can disable cookies in your browser settings if you prefer.'
    },
    {
      title: 'Third-Party Services',
      description: 'We may use trusted third-party tools for analytics, email communication, or website functionality. These services are used strictly to support our operations and comply with standard data protection practices.'
    },
    {
      title: 'Your Rights',
      items: [
        'Request access to your personal data',
        'Ask for corrections or updates',
        'Request deletion of your information'
      ],
      footnote: 'You can contact us at any time to exercise these rights.'
    },
    {
      title: 'Policy Updates',
      description: 'This Privacy Policy may be updated occasionally to reflect changes in legal or operational requirements. Updates will be posted on this page.'
    },
    {
      title: 'Contact Us',
      description: 'If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out using the contact details available on our website.'
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
            Privacy Policy
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
            At Core Grow Vision, we respect your privacy and are committed to protecting the personal information you share with us. This policy explains how we collect, use, and safeguard your data.
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
                <div className="space-y-3">
                  <ul className="list-disc list-inside space-y-2 text-neutral-300 leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {section.footnote && (
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {section.footnote}
                    </p>
                  )}
                </div>
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

