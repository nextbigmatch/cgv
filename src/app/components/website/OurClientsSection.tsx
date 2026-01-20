import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import {
  NexoraLogo,
  HyatusLogo,
  SynergyLogo,
  VelocityLogo,
  ZenithLogo,
  OrangeCountyLogo,
  AtrinetLogo,
  HyatusHeroImg,
  GoldKioskHeroImg
} from '@/app/components/website/BrandLogos';

interface Client {
  id: string;
  name: string;
  logo: React.ComponentType<{ className?: string }>;
  heroImage?: string;
  description: string;
  website?: string;
}

const clients: Client[] = [
  {
    id: 'bloombar',
    name: 'BLOOMBAR WATCHES',
    logo: NexoraLogo,
    heroImage: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGJyYW5kfGVufDF8fHx8MTc2ODYzMzg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Core Grow Vision partnered with Bloombar Watches to refine their brand presence, enhance the digital storefront, and deliver a more seamless customer experience.',
    website: 'https://bloombarwatches.com'
  },
  {
    id: 'quantum',
    name: 'HYATUS',
    logo: HyatusLogo,
    heroImage: HyatusHeroImg,
    description: 'Core Grow Vision partnered with Hyatus to define a cohesive brand identity and design a modern, responsive website that accurately reflects their values, improves user engagement, and sets a foundation for consistent visual communication.',
    website: 'https://hyatus.com'
  },
  {
    id: 'synergy',
    name: 'REAL RECOVERY TALK',
    logo: SynergyLogo,
    heroImage: 'https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHN1cHBvcnR8ZW58MXx8fHwxNzY4NjM3NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'We partnered with Real Recovery Talk to create a cohesive brand book and a modern, empathetic website design.',
    website: 'https://realrecoverytalk.com'
  },
  {
    id: 'velocity',
    name: 'GOLDKIOSK',
    logo: VelocityLogo,
    heroImage: GoldKioskHeroImg,
    description: 'Developed a high-performance, secure e-commerce platform for GoldKiosk with responsive layouts and smooth checkout flows.',
    website: 'https://goldkiosk.com'
  },
  {
    id: 'zenith',
    name: 'AWS BOATS',
    logo: ZenithLogo,
    heroImage: 'https://images.unsplash.com/photo-1627761801957-4bf6cfb4fa20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMG9jZWFufGVufDF8fHx8MTc2ODU3MTg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Core Grow Vision redesigned and developed the AWS Boats website to improve usability, modernize the visual experience, and support a scalable digital presence.',
    website: 'https://awsboats.com'
  },
  {
    id: 'fusion',
    name: 'ORANGE COUNTY FUNCTIONAL MEDICINE',
    logo: OrangeCountyLogo,
    heroImage: 'https://images.unsplash.com/photo-1556760544-74068565f05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5jdGlvbmFsJTIwbWVkaWNpbmUlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3Njg4ODg0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'We built a user-friendly email subscription system for Orange County Functional Medicine to support subscriber growth and engagement.',
    website: 'https://hubspot.com'
  },
  {
    id: 'atrinet',
    name: 'ATRINET',
    logo: AtrinetLogo,
    heroImage: 'https://images.unsplash.com/photo-1767884162181-68267b807b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4Nzc1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'We redesigned Atrinet\'s website to clearly present its telecom solutions and strengthen user engagement across VAS and CPaaS offerings.',
    website: 'https://orangecountyfunctionalmedicine.com/'
  }
];

export default function OurClientsSection() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
    setIsLocked(true);
    
    // Re-enable hover after 4 seconds
    setTimeout(() => {
      setIsLocked(false);
    }, 4000);
  };

  const handleClientHover = (client: Client) => {
    if (!isLocked) {
      setSelectedClient(client);
    }
  };

  const defaultContent = {
    logo: null as React.ComponentType<{ className?: string }> | null,
    heroImage: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2h8ZW58MXx8fHwxNzY4NDg3OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Up-And-Comers. Disruptors. Innovators. We Work With The Best Of The Best.'
  };

  const displayContent = selectedClient || defaultContent;
  const LogoComponent = displayContent.logo;

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-[#FF7029]">
          Our Clients
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-[repeat(6,120px)] gap-4">
          {/* LARGE FEATURE BOX - Left side, spans 7 columns and 4 rows */}
          <div 
            className="col-span-7 row-span-4 relative rounded-2xl overflow-hidden bg-[#1C1C1C] border border-neutral-800 group"
            onClick={() => selectedClient?.website && window.open(selectedClient.website, '_blank')}
            style={{ cursor: selectedClient?.website ? 'pointer' : 'default' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClient?.id || 'default'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={displayContent.heroImage}
                  alt={selectedClient?.name || 'Our Clients'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                >
                  {/* Logo Top Left */}
                  <div className="flex items-start justify-between">
                    {LogoComponent && (
                      <div className="max-w-40 max-h-40">
                        <LogoComponent className="w-full h-auto" />
                      </div>
                    )}
                    
                    {/* External Link Icon - Top Right */}
                    {selectedClient?.website && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#FF7029] flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Description Bottom Left */}
                  <div>
                    <p className="text-white text-2xl lg:text-3xl font-bold leading-tight max-w-xl">
                      {displayContent.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BLOOMBAR WATCHES (NEXORA) - Top right, wide */}
          <motion.div
            onClick={() => handleClientClick(clients[0])}
            onHoverStart={() => handleClientHover(clients[0])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-5 row-span-2 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-6"
          >
            <NexoraLogo className="max-w-32 max-h-32" />
          </motion.div>

          {/* HYATUS - Row 3, right side */}
          <motion.div
            onClick={() => handleClientClick(clients[1])}
            onHoverStart={() => handleClientHover(clients[1])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-2 row-span-1 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-4"
          >
            <HyatusLogo className="max-w-32 max-h-32" />
          </motion.div>

          {/* REAL RECOVERY TALK - Row 3, right side */}
          <motion.div
            onClick={() => handleClientClick(clients[2])}
            onHoverStart={() => handleClientHover(clients[2])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-3 row-span-1 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-4"
          >
            <SynergyLogo className="max-w-32 max-h-32" />
          </motion.div>

          {/* GOLDKIOSK - Row 4, right side */}
          <motion.div
            onClick={() => handleClientClick(clients[3])}
            onHoverStart={() => handleClientHover(clients[3])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-2 row-span-1 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-4"
          >
            <VelocityLogo className="max-w-20 max-h-20" />
          </motion.div>

          {/* AWS BOATS - Row 4, right side */}
          <motion.div
            onClick={() => handleClientClick(clients[4])}
            onHoverStart={() => handleClientHover(clients[4])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-3 row-span-1 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-4"
          >
            <ZenithLogo className="max-w-28 max-h-28" />
          </motion.div>

          {/* ATRINET - Bottom left, wide */}
          <motion.div
            onClick={() => handleClientClick(clients[6])}
            onHoverStart={() => handleClientHover(clients[6])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-7 row-span-2 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-6"
          >
            <AtrinetLogo className="max-w-32 max-h-32" />
          </motion.div>

          {/* FUSION TECH - Bottom middle */}
          <motion.div
            onClick={() => handleClientClick(clients[5])}
            onHoverStart={() => handleClientHover(clients[5])}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-2 row-span-2 bg-[#1C1C1C] border border-neutral-800 rounded-2xl flex items-center justify-center cursor-pointer hover:border-[#FF7029] transition-all duration-300 p-4"
          >
            <OrangeCountyLogo className="max-w-32 max-h-32" />
          </motion.div>

          {/* See Our Work CTA - Bottom right */}
          <Link
            to="/case-studies"
            className="col-span-3 row-span-2 bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] rounded-2xl flex flex-col items-start justify-between p-8 group hover:scale-[1.02] transition-all duration-300"
          >
            <div></div>
            <div className="w-full">
              <h3 className="text-3xl font-bold text-black mb-4">See Our Work</h3>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {/* Feature Box */}
          <div 
            className="relative rounded-2xl overflow-hidden bg-[#1C1C1C] border border-neutral-800 h-[300px]"
            onClick={() => selectedClient?.website && window.open(selectedClient.website, '_blank')}
            style={{ cursor: selectedClient?.website ? 'pointer' : 'default' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClient?.id || 'default'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={displayContent.heroImage}
                  alt={selectedClient?.name || 'Our Clients'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    {LogoComponent && (
                      <div className="w-24 h-24">
                        <LogoComponent className="w-full h-full object-contain" />
                      </div>
                    )}
                    
                    {/* External Link Icon - Mobile */}
                    {selectedClient?.website && (
                      <div className="w-10 h-10 rounded-full bg-[#FF7029] flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-white text-xl font-bold leading-tight">{displayContent.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Client Cards - Horizontal Scroll */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-3 min-w-max">
              {clients.map((client) => {
                const ClientLogo = client.logo;
                return (
                  <motion.div
                    key={client.id}
                    onClick={() => handleClientClick(client)}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#1C1C1C] border border-neutral-800 rounded-xl p-4 flex items-center justify-center text-center cursor-pointer active:border-[#FF7029] transition-all duration-300 min-w-[140px] h-24"
                  >
                    <div className="w-20 h-20">
                      <ClientLogo className="w-full h-full" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/case-studies"
            className="bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] rounded-2xl p-6 flex items-center justify-between"
          >
            <h3 className="text-2xl font-bold text-black">See Our Work</h3>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}