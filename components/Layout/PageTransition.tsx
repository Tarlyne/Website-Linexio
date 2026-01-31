
'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTransition handles the entry/exit animations for routes.
 * It also manages the scroll-to-top logic to ensure that new pages start at the top
 * without flickering during the transition phase.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = "" }) => {

  useEffect(() => {
    // Only scroll to top if there's no pending anchor target (from Navbar navigation)
    if (!window.__pendingScrollTarget) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "Apple-like" snappy yet smooth feel
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
