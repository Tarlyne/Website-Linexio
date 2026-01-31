'use client';

import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { content } from '../../lib/content';
import { Check, LayoutGrid, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../Layout/PageTransition';
import { SmartImage } from '../ui/SmartImage';

const AbstractUI: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'security-lock') {
    return (
      <div className="w-full aspect-[4/3] bg-dark-900 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
        {/* Animated Background Layers */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full"
        />

        {/* Pulsing Concentric Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0.5, 1.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
            className="absolute w-40 h-40 border border-brand-500/30 rounded-full"
          />
        ))}

        {/* Main Icon Container */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 p-10 rounded-[2.5rem] bg-dark-950/50 backdrop-blur-md border border-white/10 shadow-glow flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent rounded-[2.5rem]" />
          <ShieldCheck className="w-24 h-24 text-brand-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" strokeWidth={1.5} />
        </motion.div>
      </div>
    );
  }

  if (type === 'backup-lock') {
    return (
      <div className="w-full aspect-[4/3] bg-dark-900 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
        {/* Pulsing Background Glow (Consistency with Section 1) */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 bg-brand-500/20 blur-[100px] rounded-full"
        />

        {/* Scanning Box */}
        <div className="relative z-10 p-12 rounded-[2.5rem] bg-dark-950/40 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
          <Lock className="w-20 h-20 text-brand-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" strokeWidth={1.5} />

          {/* Vertical Scanning Beam - Slowed to 6s */}
          <motion.div
            animate={{ top: ['-20%', '120%', '-20%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,1)] z-20"
          />

          {/* Subtle Glow Pulse inside the lock box */}
          <motion.div
            animate={{ opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-brand-500/10"
          />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-12 left-12 w-6 h-6 border-t-2 border-l-2 border-brand-500/40 rounded-tl-lg" />
        <div className="absolute top-12 right-12 w-6 h-6 border-t-2 border-r-2 border-brand-500/40 rounded-tr-lg" />
        <div className="absolute bottom-12 left-12 w-6 h-6 border-b-2 border-l-2 border-brand-500/40 rounded-bl-lg" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b-2 border-r-2 border-brand-500/40 rounded-br-lg" />
      </div>
    );
  }

  if (type === 'stat') {
    return (
      <div className="w-full aspect-[4/3] bg-dark-900 rounded-2xl border border-slate-800 p-6 flex flex-col gap-4 shadow-xl relative overflow-hidden">
        <div className="flex gap-4">
          <div className="flex-1 bg-dark-800 rounded-xl p-4 border border-slate-700">
            <div className="w-8 h-8 rounded-lg bg-brand-900/50 mb-3"></div>
            <div className="w-16 h-4 bg-slate-700 rounded mb-2"></div>
            <div className="w-8 h-6 bg-brand-500/20 rounded"></div>
          </div>
          <div className="flex-1 bg-dark-800 rounded-xl p-4 border border-slate-700">
            <div className="w-8 h-8 rounded-lg bg-emerald-900/50 mb-3"></div>
            <div className="w-16 h-4 bg-slate-700 rounded mb-2"></div>
            <div className="w-8 h-6 bg-emerald-500/20 rounded"></div>
          </div>
        </div>
        <div className="flex-1 bg-dark-800 rounded-xl border border-slate-700 p-4 flex flex-col justify-between relative">
          <div className="w-32 h-4 bg-slate-600 rounded"></div>
          <div className="space-y-2 mt-4">
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-brand-500"></div>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-purple-500"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
      </div>
    );
  }

  if (type === 'list' || type === 'check') {
    return (
      <div className="w-full aspect-[4/3] bg-dark-900 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col relative overflow-hidden">
        <div className="w-1/3 h-4 bg-slate-700 rounded mb-6"></div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-md ${type === 'check' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-brand-500/20 text-brand-500'} flex items-center justify-center border border-white/5`}>
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1 h-12 bg-dark-800 rounded-lg border border-slate-700/50"></div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      </div>
    )
  }

  if (type === 'table') {
    return (
      <div className="w-full aspect-[4/3] bg-dark-900 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden flex flex-col">
        <div className="flex justify-between mb-4">
          <div className="w-24 h-6 bg-slate-700 rounded"></div>
          <div className="w-8 h-6 bg-slate-700 rounded"></div>
        </div>
        <div className="flex-1 border border-slate-700/50 rounded-xl overflow-hidden">
          <div className="h-10 bg-dark-800 border-b border-slate-700/50 flex items-center px-4 gap-4">
            <div className="w-4 h-4 rounded bg-slate-600"></div>
            <div className="w-20 h-3 rounded bg-slate-600"></div>
          </div>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-10 border-b border-slate-800 flex items-center px-4 gap-4">
              <div className="w-4 h-4 rounded bg-slate-800"></div>
              <div className="w-full h-2 rounded bg-slate-800/50"></div>
              <div className="w-8 h-4 rounded bg-brand-500/20 ml-auto"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full aspect-[4/3] bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl border border-slate-800 p-8 shadow-xl relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="w-32 h-32 rounded-full bg-brand-500/10 blur-2xl absolute"></div>
      <div className="relative z-10 w-2/3 h-2/3 border border-slate-700 bg-dark-950/50 backdrop-blur-sm rounded-xl p-4">
        <div className="w-full h-full border border-dashed border-slate-700 rounded-lg flex items-center justify-center">
          <LayoutGrid className="text-slate-700 w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);

export const FeatureDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const router = useRouter();
  const pageData = content.pages[slug || ''];

  const otherFeatures = useMemo(() => {
    // Deterministic "random" selection based on current slug length to allow static generation stability
    const allFeatures = [...content.features].filter(f => f.slug !== slug && f.slug && content.pages[f.slug]);
    const startIndex = (slug?.length || 0) % Math.max(1, allFeatures.length);
    // Create a rotated copy of the array starting from startIndex
    const rotated = [...allFeatures.slice(startIndex), ...allFeatures.slice(0, startIndex)];
    return rotated.slice(0, 3);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pageData) {
    router.replace('/');
    return null;
  }

  return (
    <PageTransition className="min-h-screen pt-24 pb-20" key={slug}>
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 md:mb-32">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Zurück zur Übersicht
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6">
            {pageData.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-100 to-brand-300 mb-6 leading-tight pb-2">
            {pageData.hero.headline}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {pageData.hero.subheadline}
          </p>
        </motion.div>

        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-600/10 blur-[150px] rounded-full opacity-40 pointer-events-none" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {pageData.sections.map((section, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {section.description}
              </p>
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1 w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-brand-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full"
            >
              {section.image ? (
                <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative group bg-dark-900">
                  <div className="absolute inset-0 bg-brand-500/5 group-hover:bg-brand-500/10 transition-colors z-10 pointer-events-none" />

                  <SmartImage
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    fallbackComponent={<AbstractUI type={section.visualType} />}
                  />

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-20"></div>
                </div>
              ) : (
                <AbstractUI type={section.visualType} />
              )}
            </motion.div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 border-t border-slate-800/50 pt-20">
        <h3 className="text-2xl font-bold text-white mb-8">Mehr entdecken</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherFeatures.map((feature, idx) => (
            <Link
              key={idx}
              href={`/feature/${feature.slug}`}
              className="group bg-dark-800/40 border border-slate-800/60 rounded-2xl p-6 hover:bg-dark-800 hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="mb-4">
                <div className="bg-dark-900/80 w-fit p-3 rounded-xl border border-slate-700/50 group-hover:text-brand-400 transition-colors text-slate-300 mb-4 shadow-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400 line-clamp-2">{feature.description}</p>
              </div>
              <div className="flex items-center text-sm font-medium text-brand-400 group-hover:text-brand-300 mt-4">
                Ansehen <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-20 text-center">
        <h3 className="text-white font-semibold mb-6">Bereit loszulegen?</h3>
        <a
          href="https://tarlyne.github.io/Linexio/"
          className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-xl font-medium transition-colors glossy-bar shadow-glow"
        >
          Jetzt Linexio installieren
        </a>
      </div>
    </PageTransition>
  );
};
