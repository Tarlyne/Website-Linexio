import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bot, MessageSquare } from 'lucide-react';

export const TransparencyBanner: React.FC = () => {
  const points = [
    {
      icon: Heart,
      title: "100% Kostenlos",
      text: "Kein Abo, kein Kauf, keine Werbung. Ein Werkzeug von Lehrern für Lehrer.",
      color: "text-rose-400"
    },
    {
      icon: Bot,
      title: "KI-gestütztes Projekt",
      text: "Privat entwickelt mit KI-Power. Nach hoher Nachfrage im Kollegium nun für alle verfügbar.",
      color: "text-brand-400"
    },
    {
      icon: MessageSquare,
      title: "Beta & Feedback",
      text: "Wir wachsen noch. Werde Teil der Testphase und gestalte Linexio mit deinem Feedback.",
      color: "text-amber-400"
    }
  ];

  return (
    <section id="intro" className="relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Subtile Glow-Effekte im Hintergrund */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-500/5 blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 rounded-2xl bg-dark-800/30 border border-slate-800/50 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-2.5 rounded-xl bg-dark-900/80 border border-slate-700/50 ${point.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <point.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};