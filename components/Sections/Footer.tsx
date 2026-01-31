'use client';

import React from 'react';
import { content } from '../../lib/content';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { smoothScrollTo } from '../../lib/scroll';
import { ObfuscatedEmail } from '../ui/ObfuscatedEmail';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (isHome) {
      smoothScrollTo(targetId);
    } else {
      // Setze den globalen Scroll-Marker für die Home-Komponente
      window.__pendingScrollTarget = targetId;
      router.push('/');
    }
  };

  return (
    <footer className="bg-dark-950/30 backdrop-blur-xl pt-16 pb-8 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-white">{content.brand.name}</span>
            <p className="mt-4 text-sm text-slate-500">
              {content.brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Produkt</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleNavClick(e, 'features')}
                  className="hover:text-brand-400 transition-colors cursor-pointer"
                  aria-label="Zu den App-Features scrollen"
                >
                  Features
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-400 transition-colors" aria-label="Häufig gestellte Fragen ansehen">FAQ</Link>
              </li>
              <li>
                <Link href="/feature/security" className="hover:text-brand-400 transition-colors" aria-label="Informationen zur Datensicherheit">Datensicherheit</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/impressum" className="hover:text-brand-400 transition-colors" aria-label="Impressum ansehen">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-brand-400 transition-colors" aria-label="Datenschutzerklärung ansehen">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <ObfuscatedEmail />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {content.brand.name}. Made with ❤️ for Teachers.
          </p>
        </div>
      </div>
    </footer>
  );
};