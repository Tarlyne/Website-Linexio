
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * ARCHITECTURE NOTES (Kernanweisung V2):
 * 1. Design: Non-circular design using rounded-2xl to match the Bento-Grid aesthetic.
 * 2. UX: Only visible after 400px scroll depth to keep UI clean.
 * 3. Tablet-First: 52x52px touch target for easy iPad interaction.
 * 4. Animation Refinement: Uses a custom spring transition for a smoother "Apple-like" feel.
 */

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 25,
            mass: 1
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] p-3.5 bg-brand-600/90 backdrop-blur-md text-white rounded-2xl shadow-glow glossy-bar border border-brand-500/30 group transition-shadow duration-300 hover:bg-brand-500"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />

          {/* Subtle pulse effect for the background shadow */}
          <div className="absolute inset-0 rounded-2xl bg-brand-400/20 blur-xl -z-10 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
