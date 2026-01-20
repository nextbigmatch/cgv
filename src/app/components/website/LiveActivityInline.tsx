import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getActivity, highlightKeywords } from '@/app/data/activityInventory';

export default function LiveActivityInline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentActivity, setCurrentActivity] = useState('');

  useEffect(() => {
    // Load saved index from localStorage or start at 0
    const savedIndex = localStorage.getItem('cgv_activity_index');
    const initialIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
    setCurrentIndex(initialIndex);
    setCurrentActivity(getActivity(initialIndex));

    // Update activity every 20 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 180; // Loop back to 0 after 180 (1 hour)
        localStorage.setItem('cgv_activity_index', nextIndex.toString());
        setCurrentActivity(getActivity(nextIndex));
        return nextIndex;
      });
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  const activityParts = highlightKeywords(currentActivity);

  return (
    <>
      {/* Live Indicator Dot */}
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-2 h-2 bg-[#FF7029] rounded-full mr-3"
      />

      {/* Activity Text */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="inline-block"
        >
          {activityParts.map((part, idx) => (
            <span
              key={idx}
              className={part.isKeyword ? 'text-[#FF7029]' : 'text-neutral-300'}
            >
              {part.text}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </>
  );
}
