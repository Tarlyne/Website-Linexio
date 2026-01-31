
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { content } from '../../lib/content';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { smoothScrollTo } from '../../lib/scroll';
import { SmartImage } from '../ui/SmartImage';
import { Logo } from '../../lib/assets';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    // Initial check in case page starts scrolled (e.g. browser refresh)
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (isHome) {
      smoothScrollTo(targetId);
    } else {
      window.__pendingScrollTarget = targetId;
      router.push('/');
    }
    setMobileMenuOpen(false);
  };

  const handleAppClick = () => {
    window.location.href = 'https://tarlyne.github.io/Linexio/';
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b
      ${isScrolled
        ? 'bg-dark-900/80 backdrop-blur-xl border-white/5 py-3 shadow-lg shadow-black/20'
        : 'bg-transparent border-transparent py-5'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {!isHome && (
              <div className="mr-2 md:hidden text-slate-400 group-hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
            )}

            {content.brand.logo ? (
              <SmartImage
                src={content.brand.logo}
                alt={`${content.brand.name} Logo`}
                className="h-10 w-10 object-contain rounded-lg"
                fallbackComponent={<Logo className="h-10 w-10 text-white" />}
              />
            ) : (
              <Logo className="h-10 w-10 text-white" />
            )}

            <span className="text-xl font-bold tracking-tight text-white">{content.brand.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors cursor-pointer">Features</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors cursor-pointer">Das Projekt</a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors cursor-pointer">So geht's</a>
            <Link href="/faq" className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors">FAQ</Link>
            <Link href="/feature/security" className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors">Datensicherheit</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm" icon={Download} onClick={handleAppClick}>Zur App</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-900 border-b border-slate-800 p-4 flex flex-col gap-4 shadow-2xl md:hidden animate-in slide-in-from-top-5">
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-slate-300 hover:text-brand-500 py-2">Features</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-slate-300 hover:text-brand-500 py-2">Das Projekt</a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-slate-300 hover:text-brand-500 py-2">So geht's</a>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-brand-500 py-2">FAQ</Link>
          <Link href="/feature/security" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-brand-500 py-2">Datensicherheit</Link>
          <div className="h-px bg-slate-800 my-1" />
          <Button fullWidth variant="primary" icon={Download} onClick={handleAppClick}>Zur App</Button>
        </div>
      )}
    </nav>
  );
};
