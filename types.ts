import { LucideIcon } from 'lucide-react';
import React from 'react';

declare global {
  interface Window {
    __pendingScrollTarget?: string;
  }
}

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
  visualType: 'list' | 'card' | 'table' | 'check' | 'abstract' | 'stat' | 'security-lock' | 'backup-lock'; 
  items?: string[]; 
  image?: string; 
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

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  id: string;
  icon: React.ComponentType<any>; // New: Visual guidance for the category
  questions: FAQItem[];
}

export interface ComparisonItem {
  label: string;
  cloud: string;
  offline: string;
  isPositive: boolean;
}

export interface ContentStore {
  brand: {
    name: string;
    tagline: string;
    logo?: string;
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
  faq: FAQCategory[];
  pricing: {
    headline: string;
    description: string;
  };
  comparison: {
    headline: string;
    subheadline: string;
    items: ComparisonItem[];
  };
}