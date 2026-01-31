import { ArrowRight } from 'lucide-react';
import React from 'react';
import { content } from '../../lib/content';
import Link from 'next/link';

// Helper component to handle conditional rendering safely for TypeScript
const GridItemWrapper: React.FC<{
  slug?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ slug, className, children }) => {
  if (slug) {
    return (
      <Link href={`/feature/${slug}`} className={className}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
};

export const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-100 to-brand-300 pb-1">Ihr digitaler Werkzeugkasten.</h2>
          <p className="text-slate-400 max-w-xl">
            Linexio vereint Notenverwaltung, Unterricht-Tools, Termine und vieles mehr in einer einzigen App.
            <span className="block mt-2 text-brand-400/90 font-medium">Tippen Sie auf eine Karte, um mehr zu erfahren.</span>
          </p>
        </div>

        {/* The Grid: Space Efficient Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)] relative z-10">
          {content.features.map((feature, idx) => {
            return (
              <GridItemWrapper
                key={idx}
                slug={feature.slug}
                className={`
                group relative overflow-hidden rounded-3xl bg-dark-800/40 border border-slate-800/60 p-6 md:p-8
                hover:border-brand-500/30 hover:bg-dark-800/60 transition-all duration-300 backdrop-blur-sm
                ${feature.colSpan === 2 ? 'md:col-span-2' : ''}
                ${feature.colSpan === 3 ? 'md:col-span-3' : ''}
                ${feature.slug ? 'cursor-pointer hover:shadow-glow' : ''}
              `}
              >
                {/* Large background icon for texture */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <feature.icon className="w-32 h-32 text-brand-500" />
                </div>

                {/* 
                 REMOVED justify-between to ensure titles align horizontally.
                 By using a standard flex-col flow, all h3 titles start at the same vertical offset.
              */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-dark-900/80 w-fit p-3 rounded-xl border border-slate-700/50 group-hover:border-brand-500/30 group-hover:text-brand-400 transition-colors text-slate-300 shadow-lg backdrop-blur-md">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    {feature.slug && (
                      <div className="p-2 rounded-full bg-slate-800/50 text-slate-500 group-hover:text-brand-400 group-hover:bg-brand-900/20 transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </GridItemWrapper>
            )
          })}
        </div>
      </div>
    </section>
  );
};