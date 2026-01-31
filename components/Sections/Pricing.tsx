
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MessageCircle, Info, Palette, UserCircle, Target } from 'lucide-react';
import { content } from '../../lib/content';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Story / Vision (Tablet-First: 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6">
                Ein Versprechen unter Kollegen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {content.pricing.headline}
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Linexio ist kein Produkt eines großen Unternehmens, sondern mein <strong>privates Herzensprojekt</strong>, das aus meiner täglichen Arbeit im Klassenzimmer entstanden ist. 
                </p>

                <div className="space-y-4 py-4">
                  <h4 className="text-white font-bold flex items-center gap-2 text-base">
                    <Target className="w-5 h-5 text-brand-400" /> Warum ich Linexio entwickelt habe
                  </h4>
                  <p className="text-base">
                    Ich war frustriert von den bestehenden Lösungen: Entweder verlangten sie für jedes kleinste Feature extra Geld, wirkten optisch veraltet oder waren so kompliziert aufgebaut, dass sie im hektischen Schulalltag mehr Zeit kosteten als sie sparten. Oft fehlten mir genau die praktischen Funktionen, die ich für meine Unterrichtsorganisation wirklich brauchte.
                  </p>
                  <p className="text-base italic border-l-2 border-brand-500/30 pl-4 text-slate-300">
                    "Ich wollte ein System, das modern aussieht, intuitiv funktioniert und sich einfach ehrlich anfühlt – ohne Abofallen oder unübersichtliche Menüs."
                  </p>
                </div>

                <p>
                  Linexio ist ursprünglich als reines Werkzeug für meinen eigenen Unterricht entstanden und wurde genau auf meine persönlichen Bedürfnisse zugeschnitten. Jetzt habe ich einen Punkt erreicht, an dem ich mit der App so zufrieden bin, dass ich sie gerne mit Ihnen teilen möchte. Ich bin unglaublich gespannt auf Ihre Perspektive und Ihre Wünsche, um Linexio gemeinsam mit Ihnen zu dem Assistenten zu machen, der uns allen im Schulalltag wirklich hilft.
                </p>
                
                <div className="p-5 rounded-2xl bg-dark-800/40 border border-slate-800/60 backdrop-blur-md">
                   <div className="flex gap-4 items-start">
                      <div className="shrink-0 p-2 bg-brand-500/10 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-brand-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 text-base">Ich freue mich auf Ihr Feedback</h4>
                        <p className="text-sm">
                          Haben Sie einen Fehler gefunden oder fehlt Ihnen eine Funktion? Ich freue mich über jedes konstruktive Feedback, damit ich die App gemeinsam mit Ihnen noch besser machen kann.
                        </p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Support Card (Tablet-First: 5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-dark-800/80 to-dark-950/80 rounded-[2.5rem] border border-slate-700/50 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Premium Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full -mr-16 -mt-16" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                   <div className="p-3 bg-brand-500/10 rounded-2xl border border-brand-500/20">
                      <Heart className="w-8 h-8 text-brand-400 fill-brand-400/10" />
                   </div>
                   <div className="text-right">
                      <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">Core-App</div>
                      <div className="text-3xl font-black text-white">0,00 €</div>
                   </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Unterstützer werden</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Alle Kernfunktionen sind und bleiben <strong className="text-brand-400">kostenlos</strong>. Wenn Ihnen Linexio gefällt, können Sie das Projekt direkt in der App mit einer freiwilligen Spende unterstützen. Als Dankeschön schalte ich für Sie exklusive Extras frei:
                </p>

                <div className="space-y-4 mb-10">
                   <div className="flex gap-4 items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                         <Sparkles className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm block">KI-Nutzung</span>
                        <span className="text-[11px] text-slate-500 leading-tight block">Intelligente Logik für Sitzpläne, Gruppen & Feedback für SchülerInnen</span>
                      </div>
                   </div>
                   <div className="flex gap-4 items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                         <UserCircle className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm block">Persönliche Anrede</span>
                        <span className="text-[11px] text-slate-500 leading-tight block">Ihr Name direkt auf dem Dashboard</span>
                      </div>
                   </div>
                   <div className="flex gap-4 items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                         <Palette className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm block">Exklusives Theme</span>
                        <span className="text-[11px] text-slate-500 leading-tight block">Ein besonderes Design für Ihre Arbeitsumgebung</span>
                      </div>
                   </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-900/20 border border-brand-500/20 flex gap-3 items-start">
                   <Info className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                   <p className="text-xs text-brand-200/80 leading-relaxed">
                     Unterstützung & Freischaltung der Extras erfolgt bequem direkt in den <strong>Einstellungen der Linexio App</strong>.
                   </p>
                </div>
                
                <p className="mt-6 text-[10px] text-center text-slate-500 uppercase tracking-[0.2em] font-bold">
                  Vielen Dank für Ihren Support
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
