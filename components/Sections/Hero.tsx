import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Download, WifiOff, ShieldCheck, Tablet } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../../lib/content';
import { smoothScrollTo } from '../../lib/scroll'; // Import new utility

export const Hero: React.FC = () => {

  const scrollToFeatures = () => {
    smoothScrollTo('features');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* 
         NOTE: Background Aurora elements have been moved to App.tsx 
         to create a seamless "Single Canvas" experience without 
         visual cuts or lines between sections.
      */}

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="leading-none pt-[1px]">V 1.0 jetzt verfügbar</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Ihr Unterricht. <br/>
              Ihre Daten. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-100 to-brand-300 pb-1">
                {content.brand.tagline.split('.').pop()?.trim().replace('.', '') || "Ihr System"}.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content.hero.subheadline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-100 to-brand-300 font-bold">kostenlos.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Button size="lg" icon={Download}>
                {content.hero.ctaPrimary}
              </Button>
              <Button variant="outline" size="lg" icon={ArrowRight} onClick={scrollToFeatures}>
                {content.hero.ctaSecondary}
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 gap-y-2 text-sm text-slate-500 pt-6">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-800/50 border border-slate-800/50">
                <Tablet className="w-4 h-4 text-brand-500" /> iPad Optimiert
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-800/50 border border-slate-800/50">
                <WifiOff className="w-4 h-4 text-brand-500" /> 100% Offline
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-800/50 border border-slate-800/50">
                <ShieldCheck className="w-4 h-4 text-brand-500" /> Datenschutz
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual / Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
          >
             {/* iPad Frame (Aspect Ratio 3:4) */}
             <div className="relative bg-dark-900 border-8 border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] max-h-[700px] mx-auto z-20">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-8 bg-black z-20 flex items-center justify-between px-6">
                  <div className="text-[10px] text-white font-medium">9:41</div>
                  <div className="flex gap-1.5">
                    <div className="w-12 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* Dashboard View */}
                <div className="absolute inset-0 bg-dark-800 flex flex-col pt-8">
                  <div className="p-6 h-full flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <div className="text-xs text-brand-400 font-semibold uppercase">Willkommen zurück</div>
                            <div className="text-xl font-bold text-white">Dashboard</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    </div>

                    {/* Dashboard Widgets */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                            <div className="text-2xl font-bold text-white mb-1">5a</div>
                            <div className="text-xs text-slate-400">Nächste Klasse</div>
                        </div>
                        <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                            <div className="text-2xl font-bold text-brand-400 mb-1">3</div>
                            <div className="text-xs text-slate-400">Geburtstage</div>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-700/50 p-4 overflow-hidden relative">
                         <div className="text-sm font-semibold text-white mb-4">Schülerliste 5a</div>
                         <div className="space-y-3">
                             {[1,2,3,4,5].map((i) => (
                                 <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50">
                                     <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                                     <div className="flex-1 h-2 bg-slate-600 rounded w-24"></div>
                                     <div className="w-4 h-4 rounded bg-slate-700"></div>
                                 </div>
                             ))}
                         </div>
                         {/* Gradient fade at bottom of list */}
                         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-800 to-transparent"></div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Decorative Elements around tablet */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] bg-brand-500/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Removed the bottom gradient overlay to fix the visible cut/line issue */}
    </section>
  );
};