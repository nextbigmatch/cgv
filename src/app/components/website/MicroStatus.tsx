import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// Activity Sets - 5 Days of Inventory
const activitySets = [
  // DAY 1 - DELIVERY & BUILDS
  [
    { text: 'Deploying a new website update', highlight: 'website update' },
    { text: 'Finalizing UI for a client dashboard', highlight: 'UI' },
    { text: 'Optimizing site performance scores', highlight: 'performance' },
    { text: 'Shipping design system components', highlight: 'design system' },
    { text: 'Fixing cross-device layout issues', highlight: 'cross-device' },
    { text: 'Reviewing frontend code quality', highlight: 'code quality' },
    { text: 'Preparing a client demo build', highlight: 'demo build' },
    { text: 'Improving website accessibility', highlight: 'accessibility' },
    { text: 'Refining brand UI elements', highlight: 'UI elements' },
    { text: 'Pushing live production updates', highlight: 'production' }
  ],
  // DAY 2 - BRAND & STRATEGY
  [
    { text: 'Building a brand identity system', highlight: 'brand identity' },
    { text: 'Defining visual guidelines', highlight: 'visual guidelines' },
    { text: 'Designing homepage concepts', highlight: 'homepage' },
    { text: 'Structuring content hierarchy', highlight: 'hierarchy' },
    { text: 'Aligning brand tone & voice', highlight: 'tone & voice' },
    { text: 'Reviewing logo usage rules', highlight: 'logo usage' },
    { text: 'Creating UI consistency rules', highlight: 'consistency' },
    { text: 'Designing brand assets', highlight: 'brand assets' },
    { text: 'Preparing brand documentation', highlight: 'documentation' },
    { text: 'Finalizing brand handoff files', highlight: 'handoff' }
  ],
  // DAY 3 - GROWTH & OPTIMIZATION
  [
    { text: 'Improving conversion flow', highlight: 'conversion' },
    { text: 'Optimizing landing page layouts', highlight: 'landing page' },
    { text: 'Analyzing user behavior patterns', highlight: 'behavior' },
    { text: 'Refining call-to-action placement', highlight: 'call-to-action' },
    { text: 'Enhancing mobile experience', highlight: 'mobile' },
    { text: 'Speed-optimizing core pages', highlight: 'speed' },
    { text: 'Testing user engagement paths', highlight: 'engagement' },
    { text: 'Reducing bounce rates', highlight: 'bounce rates' },
    { text: 'Improving SEO structure', highlight: 'SEO' },
    { text: 'Optimizing content clarity', highlight: 'clarity' }
  ],
  // DAY 4 - CLIENT COLLABORATION
  [
    { text: 'Reviewing client feedback', highlight: 'feedback' },
    { text: 'Preparing project revisions', highlight: 'revisions' },
    { text: 'Aligning scope and timelines', highlight: 'timelines' },
    { text: 'Refining UX based on insights', highlight: 'UX' },
    { text: 'Updating design iterations', highlight: 'iterations' },
    { text: 'Finalizing delivery checklists', highlight: 'delivery' },
    { text: 'Coordinating launch tasks', highlight: 'launch' },
    { text: 'Validating final builds', highlight: 'final builds' },
    { text: 'Sharing progress updates', highlight: 'progress' },
    { text: 'Planning next delivery phase', highlight: 'next phase' }
  ],
  // DAY 5 - SCALE & MAINTENANCE
  [
    { text: 'Maintaining active client sites', highlight: 'active sites' },
    { text: 'Monitoring website stability', highlight: 'stability' },
    { text: 'Improving scalability', highlight: 'scalability' },
    { text: 'Refactoring UI components', highlight: 'components' },
    { text: 'Enhancing security standards', highlight: 'security' },
    { text: 'Updating design libraries', highlight: 'libraries' },
    { text: 'Reviewing performance metrics', highlight: 'metrics' },
    { text: 'Cleaning unused assets', highlight: 'unused assets' },
    { text: 'Ensuring long-term maintainability', highlight: 'maintainability' },
    { text: 'Preparing upcoming releases', highlight: 'releases' }
  ]
];

// Helper to get or initialize the activity set (day)
const getActivityDay = (): number => {
  if (typeof window === 'undefined') return 0;
  
  const stored = localStorage.getItem('cgv_activity_day');
  const storedTime = localStorage.getItem('cgv_activity_timestamp');
  
  if (stored && storedTime) {
    const dayIndex = parseInt(stored);
    const timestamp = parseInt(storedTime);
    const now = Date.now();
    const hoursPassed = (now - timestamp) / (1000 * 60 * 60);
    
    // If less than 5 hours have passed, return the stored day
    if (hoursPassed < 5) {
      return dayIndex;
    }
    
    // Otherwise, move to next day
    const newDay = (dayIndex + 1) % 5;
    localStorage.setItem('cgv_activity_day', newDay.toString());
    localStorage.setItem('cgv_activity_timestamp', now.toString());
    return newDay;
  }
  
  // First time - initialize
  localStorage.setItem('cgv_activity_day', '0');
  localStorage.setItem('cgv_activity_timestamp', Date.now().toString());
  return 0;
};

export default function MicroStatus() {
  const [currentDay, setCurrentDay] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize activity day on mount
  useEffect(() => {
    const day = getActivityDay();
    setCurrentDay(day);
  }, []);

  // Check for day rotation every hour
  useEffect(() => {
    const checkDayRotation = () => {
      const day = getActivityDay();
      if (day !== currentDay) {
        setCurrentDay(day);
        setCurrentIndex(0); // Reset to first message of new day
      }
    };

    // Check every hour
    const intervalId = setInterval(checkDayRotation, 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, [currentDay]);

  // Rotate through 10 messages every 10 seconds
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 10);
    }, 10000); // 10 seconds per message

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const currentActivity = activitySets[currentDay][currentIndex];

  // Split text to highlight specific words
  const renderText = () => {
    const { text, highlight } = currentActivity;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    
    return parts.map((part, i) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return <span key={i} className="text-[#FF7029]">{part}</span>;
      }
      return <span key={i} className="text-white">{part}</span>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="inline-flex items-center gap-3 bg-[#1A1A1A]/60 backdrop-blur-sm border border-neutral-800/50 rounded-full px-5 py-3 cursor-default max-w-[420px]"
    >
      {/* Pulsing Live Indicator Dot */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <motion.div
          animate={{
            opacity: [1, 0.3, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-2 h-2 bg-[#FF7029] rounded-full"
        />
      </div>

      {/* Static Label + Dynamic Text */}
      <div className="flex items-baseline gap-1.5 text-sm font-medium overflow-hidden">
        <span className="text-neutral-400 flex-shrink-0">Currently working on:</span>
        
        {/* Rotating Text with Vertical Slide */}
        <div className="relative h-5 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentDay}-${currentIndex}`}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.4, 0, 0.2, 1] as const
              }}
              className="whitespace-nowrap"
            >
              {renderText()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}