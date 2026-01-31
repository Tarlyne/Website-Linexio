
import React from 'react';
import { Share, MoreVertical, Download } from 'lucide-react';
import { content } from '../../lib/content';
import { Logo } from '../../lib/assets';
import { Button } from '../ui/Button';

export const InstallationGuide: React.FC = () => {
  const handleAppClick = () => {
    window.location.href = 'https://tarlyne.github.io/Linexio/';
  };

  return (
    // Removed 'bg-dark-900' and 'border-y'. Added relative positioning and spotlight.
    // Added ID 'how-it-works' for navbar navigation
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      
      {/* Background Spotlight to separate section without hard lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-900/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-100 to-brand-300 pb-1">Installieren in Sekunden.</h2>
            <p className="text-slate-400 mb-8">
              Kein App Store Login nötig. Installieren Sie {content.brand.name} direkt über den Browser Ihres iPads. Updates kommen automatisch.
            </p>
            
            <div className="space-y-6">
              {/* iOS Step - Added backdrop blur for glass effect on the global gradient */}
              <div className="flex gap-4 p-4 rounded-2xl bg-dark-950/40 backdrop-blur-md border border-slate-800/50 hover:border-brand-500/30 transition-colors">
                <div className="shrink-0 bg-dark-800/80 p-3 rounded-xl h-fit border border-slate-700/50">
                  <Share className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">iOS (Safari)</h4>
                  <p className="text-sm text-slate-400">
                    Tippen Sie auf "Teilen" und wählen Sie <span className="text-white font-medium">"Zum Home-Bildschirm"</span>.
                  </p>
                </div>
              </div>

              {/* Android Step */}
              <div className="flex gap-4 p-4 rounded-2xl bg-dark-950/40 backdrop-blur-md border border-slate-800/50 hover:border-brand-500/30 transition-colors">
                <div className="shrink-0 bg-dark-800/80 p-3 rounded-xl h-fit border border-slate-700/50">
                  <MoreVertical className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Android / Chrome</h4>
                  <p className="text-sm text-slate-400">
                    Tippen Sie auf das Menü und wählen Sie <span className="text-white font-medium">"App installieren"</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 bg-gradient-to-br from-brand-900/50 to-dark-900/50 rounded-3xl p-1 shadow-2xl rotate-1 md:rotate-2 border border-slate-700/50 backdrop-blur-sm">
            <div className="bg-dark-950/90 rounded-[22px] overflow-hidden h-full min-h-[400px] flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               
               {/* App Icon Presentation */}
               <div className="text-center z-10 px-6 flex flex-col items-center">
                 <div className="relative mb-8 group">
                    {/* Glow effect behind logo */}
                    <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full scale-150 group-hover:scale-[1.8] transition-transform duration-700 -z-10" />
                    <Logo className="w-32 h-32 text-white drop-shadow-2xl" accentColor="#22d3ee" />
                 </div>
                 
                 <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">{content.brand.name}</h3>
                 
                 <Button 
                   variant="primary" 
                   size="lg" 
                   icon={Download}
                   className="shadow-xl"
                   onClick={handleAppClick}
                 >
                   Jetzt installieren
                 </Button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
