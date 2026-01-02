import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, WifiOff, ShieldCheck, Zap, Info } from 'lucide-react';
import { content } from '../../lib/content';

const GridPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

export const FeatureClash: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {content.comparison.headline}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {content.comparison.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Cloud Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-dark-950/40 rounded-[2.5rem] border border-slate-800 p-8 flex flex-col h-full overflow-hidden"
          >
            <GridPattern className="text-slate-100" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-2xl bg-slate-800 text-slate-400">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-300">Standard Cloud-Lösungen</h3>
            </div>

            <div className="space-y-6 flex-1 relative z-10">
              {content.comparison.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">{item.label}</span>
                  <span className="text-slate-500 font-medium">{item.cloud}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 flex items-start gap-3 relative z-10">
              <div className="shrink-0 p-1 rounded-lg bg-slate-800/50">
                <Info className="w-4 h-4 text-slate-600 shrink-0" />
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                Architekturbedingt sind Cloud-Dienste auf externe Infrastruktur und stabile Netzwerke angewiesen.
              </p>
            </div>
          </motion.div>

          {/* Linexio Card (Premium Highlight) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-brand-950/20 rounded-[2.5rem] border border-brand-500/30 p-8 flex flex-col h-full overflow-hidden shadow-glow"
          >
            <GridPattern className="text-brand-400 opacity-[0.08]" />
            
            {/* Background Glow Overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-2xl bg-brand-600 text-white shadow-lg">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Linexio (Zero-Knowledge)</h3>
            </div>

            <div className="space-y-6 flex-1 relative z-10">
              {content.comparison.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">{item.label}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  <span className="text-white font-semibold flex items-center gap-2">
                    {item.offline}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 relative z-10">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                <Zap className="w-5 h-5 text-brand-400 animate-pulse" />
                <p className="text-sm text-brand-200 font-medium">
                  Volle Autonomie & 100% DSGVO-Sicherheit durch moderne Offline-Architektur.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};