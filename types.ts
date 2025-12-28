import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  colSpan?: number; // For Bento Grid layout
  slug?: string; // URL path for the detail page
}

export interface FeatureSection {
  title: string;
  description: string;
  // Fix: Added 'stat' to supported visual types to match content.ts usage and FeatureDetail implementation
  visualType: 'list' | 'card' | 'table' | 'check' | 'abstract' | 'stat'; // Controls the abstract UI mockup
  items?: string[]; // Optional bullet points
  image?: string; // Optional real screenshot URL (overrides visualType if present)
}

export interface FeaturePageData {
  slug: string;
  hero: {
    headline: string;
    subheadline: string;
    badge: string;
  };
  sections: FeatureSection[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface ContentStore {
  brand: {
    name: string;
    tagline: string;
    logo?: string; // Optional: Base64 string or URL to the real logo image
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: string[];
  };
  features: FeatureItem[];
  pages: Record<string, FeaturePageData>;
  pricing: {
    headline: string;
    description: string;
  };
}