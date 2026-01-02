import React, { useEffect } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { TransparencyBanner } from './components/Sections/TransparencyBanner';
import { FeatureClash } from './components/Sections/FeatureClash';
import { BentoGrid } from './components/Sections/BentoGrid';
import { Pricing } from './components/Sections/Pricing';
import { InstallationGuide } from './components/Sections/InstallationGuide';
import { Footer } from './components/Sections/Footer';
import { FeatureDetail } from './components/Sections/FeatureDetail';
import { Impressum } from './components/Legal/Impressum';
import { PrivacyPolicy } from './components/Legal/PrivacyPolicy';
import { FAQ } from './components/Legal/FAQ';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { BrowserRouter as Router, Routes, Route, useLocation } from './lib/router';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/Layout/PageTransition';
import { smoothScrollTo } from './lib/scroll';

/**
 * ARCHITECTURE NOTES (Kernanweisung V2 Compliance):
 * 
 * 1. Scroll Management Refactoring:
 *    - The previous 'ScrollToTop' component was removed because it triggered 
 *      the scroll jump during the exit animation of the outgoing page.
 *    - Scroll-to-top responsibility is now moved into 'PageTransition' to 
 *      ensure it only happens when the new page component mounts.
 * 
 * 2. Global UI Utilities:
 *    - Added the floating ScrollToTop button for improved navigation efficiency on long pages.
 * 
 * 3. Cross-Page Anchoring:
 *    - Still uses window.__pendingScrollTarget to allow the Navbar to link to 
 *      anchors on the Home page from any subpage.
 */

const Home: React.FC = () => {
  useEffect(() => {
    // Prüfen, ob die Navbar einen Scroll-Wunsch hinterlassen hat
    if (window.__pendingScrollTarget) {
      const target = window.__pendingScrollTarget;
      const timer = setTimeout(() => {
        smoothScrollTo(target);
        window.__pendingScrollTarget = undefined; 
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <PageTransition>
      <main>
        <Hero />
        <TransparencyBanner />
        <FeatureClash />
        <BentoGrid />
        <Pricing />
        <InstallationGuide />
      </main>
    </PageTransition>
  );
};

// Inner component to access Router Context
const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-brand-500/30 selection:text-white relative">
      {/* GLOBAL BACKGROUND CANVAS */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-brand-900/20 blur-[120px] rounded-full opacity-40" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-600/10 blur-[150px] rounded-full opacity-30" />
          <div className="absolute top-[600px] left-1/4 w-[500px] h-[500px] bg-brand-800/10 blur-[120px] rounded-full opacity-20" />
      </div>

      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location.pathname} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/feature/:slug" element={<FeatureDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<PrivacyPolicy />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;