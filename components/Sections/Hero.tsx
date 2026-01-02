import React from 'react';
import { Button } from '../ui/Button';
import { 
  ArrowRight, 
  Download, 
  WifiOff, 
  ShieldCheck, 
  Tablet, 
  Heart, 
  CloudOff,
  UserCheck,
  Save,
  RefreshCw,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../../lib/content';
import { smoothScrollTo } from '../../lib/scroll';
import { Logo } from '../../lib/assets';

const badgeIconMap: Record<string, React.ComponentType<any>> = {
  "Optimiert für Tablets": Tablet,
  "100% Offline": WifiOff,
  "DSGVO-Konform": ShieldCheck,
  "Kostenlos & Werbefrei": Heart,
  "Ohne Cloud-Zwang": CloudOff,
  "Kein Benutzerkonto nötig": UserCheck,
  "Sichere Backup-Funktion": Save,
  "Regelmäßige Updates": RefreshCw
};

export const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    smoothScrollTo('features');
  };

  const scrollToIntro = () => {
    smoothScrollTo('intro');
  };

  const handleAppClick = () => {
    window.location.href = 'https://tarlyne.github.io/Linexio/';
  };

  return (
    <section className="relative pt-24 pb-8 md:pt-36 md:pb-16 overflow-hidden min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Button size="lg" icon={Download} onClick={handleAppClick}>
                {content.hero.ctaPrimary}
              </Button>
              <Button variant="outline" size="lg" icon={ArrowRight} onClick={scrollToFeatures}>
                {content.hero.ctaSecondary}
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 gap-y-3 text-sm text-slate-400 pt-6">
              {content.hero.badges.map((badgeText, idx) => {
                const Icon = badgeIconMap[badgeText] || ShieldCheck;
                return (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800/40 border border-slate-800/50 backdrop-blur-sm hover:border-brand-500/30 transition-colors">
                    <Icon className="w-4 h-4 text-brand-500" />
                    <span className="whitespace-nowrap">{badgeText}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center p-4 lg:p-0"
          >
             <motion.div
               animate={{ y: [0, -12, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-20 w-full max-w-[320px] aspect-square rounded-[3rem] bg-dark-950/40 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group"
             >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(34,211,238,0.15)_25%,transparent_50%,rgba(34,211,238,0.15)_75%,transparent_100%)] opacity-60 pointer-events-none"
                />
                <motion.div 
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-500/10 blur-3xl pointer-events-none"
                />
                <div className="relative p-14 w-full h-full flex items-center justify-center">
                   <motion.div
                     animate={{ scale: [1, 1.02, 1] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="w-full h-full"
                   >
                     <Logo 
                        className="w-full h-full text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-transform duration-700 group-hover:scale-105" 
                        accentColor="#22d3ee" 
                     />
                   </motion.div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-1 px-12 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
             </motion.div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10">
                <motion.div 
                   animate={{ 
                     scale: [1, 1.15, 1],
                     opacity: [0.2, 0.4, 0.2]
                   }}
                   transition={{ duration: 8, repeat: Infinity }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-500/20 blur-[100px] rounded-full"
                />
                <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-cyan-400/10 blur-[120px] rounded-full" />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer group z-20"
        onClick={scrollToIntro}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-brand-400 transition-colors font-bold">Entdecken</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-1 rounded-full border border-slate-800 text-slate-500 group-hover:text-brand-400 group-hover:border-brand-500/30 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};