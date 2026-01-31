'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, Search, HelpCircle } from 'lucide-react';
import { content } from '../../lib/content';
import Link from 'next/link';
import { PageTransition } from '../Layout/PageTransition';
import { ObfuscatedEmail } from '../ui/ObfuscatedEmail';

/**
 * ARCHITECTURE NOTES (Kernanweisung V2):
 * 1. Tablet-First Navigation: Horizontal pill-tabs optimized for iPad portrait/landscape.
 * 2. Highlighting: Search term highlighting in questions and answers.
 * 3. Minimalist UX: Removed redundant quick links to focus on the core FAQ and direct contact.
 * 4. Design Consistency: Contact button now uses global brand-primary styles.
 * 5. Single-Open Logic: State management updated to ensure only one accordion item is open at a time (Maximized Efficiency).
 */

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) return <>{text}</>;

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-brand-500/30 text-white rounded-sm px-0.5">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  searchTerm: string;
  onClick: () => void
}> = ({
  question,
  answer,
  isOpen,
  searchTerm,
  onClick
}) => {
    return (
      <div className={`border-b border-slate-800 transition-colors ${isOpen ? 'bg-brand-900/10' : ''}`}>
        <button
          onClick={onClick}
          className="w-full py-5 px-6 flex items-center justify-between text-left group focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className={`font-medium pr-4 transition-colors ${isOpen ? 'text-brand-400' : 'text-slate-200 group-hover:text-white'}`}>
            <HighlightedText text={question} highlight={searchTerm} />
          </span>
          <div className={`shrink-0 p-1 rounded-full transition-colors ${isOpen ? 'bg-brand-500/20 text-brand-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                <HighlightedText text={answer} highlight={searchTerm} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItemKey, setActiveItemKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(content.faq[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setActiveItemKey(prev => prev === key ? null : key);
  };

  const filteredFaq = useMemo(() => {
    return content.faq.map(category => ({
      ...category,
      questions: category.questions.filter(q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  }, [searchTerm]);

  return (
    <PageTransition className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Hilfe & Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Häufig gestellte Fragen</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Ich möchte Ihnen den Schulalltag so einfach wie möglich machen. Hier finden Sie schnelle Antworten auf die wichtigsten Fragen.
          </p>
        </header>

        {/* Search Bar with Focus Glow */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-brand-500/5 blur-2xl rounded-3xl opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-brand-400" />
          <input
            type="text"
            placeholder="Suchen Sie nach Stichworten wie 'Offline', 'Noten' oder 'Backup'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-dark-800/50 border border-slate-700 rounded-[1.25rem] py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all placeholder:text-slate-600 shadow-xl relative z-10"
          />
        </div>

        {searchTerm === '' ? (
          <div className="space-y-10">
            {/* Horizontal Pill Navigation (Tablet-First) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {content.faq.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl whitespace-nowrap text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id
                        ? 'bg-brand-600 text-white shadow-glow'
                        : 'bg-dark-800/50 text-slate-400 hover:bg-dark-800 hover:text-white border border-slate-800 hover:border-slate-700'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Questions area */}
            <div className="space-y-8 min-h-[400px]">
              {content.faq.map(category => (
                <div key={category.id} className={activeCategory === category.id ? 'block animate-in fade-in slide-in-from-bottom-2 duration-500' : 'hidden'}>
                  <div className="bg-dark-900/40 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-sm">
                    {category.questions.map((q, idx) => {
                      const itemKey = `${category.id}-${idx}`;
                      return (
                        <AccordionItem
                          key={idx}
                          question={q.question}
                          answer={q.answer}
                          searchTerm={searchTerm}
                          isOpen={activeItemKey === itemKey}
                          onClick={() => toggleItem(category.id, idx)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Search Results */
          <div className="space-y-8 animate-in fade-in duration-300">
            {filteredFaq.length > 0 ? (
              filteredFaq.map(category => (
                <div key={category.id}>
                  <div className="flex items-center gap-2 mb-4 ml-4">
                    <category.icon className="w-4 h-4 text-slate-500" />
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{category.title}</h3>
                  </div>
                  <div className="bg-dark-900/40 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl mb-8">
                    {category.questions.map((q, idx) => {
                      const itemKey = `${category.id}-${idx}`;
                      return (
                        <AccordionItem
                          key={idx}
                          question={q.question}
                          answer={q.answer}
                          searchTerm={searchTerm}
                          isOpen={activeItemKey === itemKey}
                          onClick={() => toggleItem(category.id, idx)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-24 bg-dark-800/20 rounded-[2.5rem] border border-dashed border-slate-800">
                <HelpCircle className="w-16 h-16 text-slate-700 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">Keine Ergebnisse gefunden</h3>
                <p className="text-slate-500 mb-6">Wir konnten leider nichts zu "{searchTerm}" finden.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-2 bg-brand-900/40 border border-brand-500/30 rounded-xl text-brand-300 text-sm font-medium hover:bg-brand-900/60 transition-colors"
                >
                  Alle Fragen anzeigen
                </button>
              </div>
            )}
          </div>
        )}

        {/* Contact Banner */}
        <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-brand-900/20 to-dark-950 border border-brand-500/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full translate-y-1/2 pointer-events-none" />
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">Keine passende Antwort gefunden?</h3>
          <p className="text-slate-400 mb-6 relative z-10 max-w-xl mx-auto text-sm leading-relaxed">
            Schreiben Sie mir gerne einfach eine E-Mail, falls Ihre Frage hier nicht geklärt werden konnte. Ich helfe Ihnen sehr gerne weiter!
          </p>
          <ObfuscatedEmail
            variant="button"
            className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 glossy-bar shadow-glow border border-brand-500/20 relative z-10 hover:scale-[1.02]"
          />
        </div>
      </div>
    </PageTransition>
  );
};