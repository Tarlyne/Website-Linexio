'use client';

import React, { useEffect } from 'react';
import { Hero } from './Sections/Hero';
import { TransparencyBanner } from './Sections/TransparencyBanner';
import { FeatureClash } from './Sections/FeatureClash';
import { BentoGrid } from './Sections/BentoGrid';
import { Pricing } from './Sections/Pricing';
import { InstallationGuide } from './Sections/InstallationGuide';
import { PageTransition } from './Layout/PageTransition';
import { smoothScrollTo } from '../lib/scroll';

export const HomeClient: React.FC = () => {
    useEffect(() => {
        if (window.__pendingScrollTarget) {
            const target = window.__pendingScrollTarget;
            const timer = setTimeout(() => {
                smoothScrollTo(target);
                window.__pendingScrollTarget = undefined;
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <PageTransition>
            <main>
                <Hero />
                <TransparencyBanner />
                <FeatureClash />
                <BentoGrid />
                <Pricing />
                <InstallationGuide />
            </main>
        </PageTransition>
    );
};
