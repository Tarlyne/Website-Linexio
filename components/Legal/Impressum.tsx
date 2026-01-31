'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { PageTransition } from '../Layout/PageTransition';
import { ChevronLeft, Mail, MapPin, User } from 'lucide-react';
import { ObfuscatedEmail } from '../ui/ObfuscatedEmail';

export const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Rechtliches
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Impressum</h1>
          <p className="text-slate-400 text-lg">
            Angaben gemäß § 5 TMG.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark-800/40 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-400" /> Betreiber
            </h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Name / Inhaber</p>
                <p className="text-lg text-white font-medium">Torben Böhm</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Anschrift</p>
                  <p>Gollacker 14</p>
                  <p>35708 Haiger</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/40 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-400" /> Kontakt
            </h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">E-Mail</p>
                <ObfuscatedEmail variant="text" className="text-lg" />
              </div>
              <p className="text-sm text-slate-400 italic">
                Hinweis: Dies ist ein privat geführtes Projekt. Kontaktieren Sie uns gerne bei Fragen zur App-Nutzung.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 text-sm space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-white mb-2">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-white mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-white mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};