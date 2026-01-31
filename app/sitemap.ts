import { MetadataRoute } from 'next';
import { content } from '../lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tarlyne.github.io/Website-Linexio';

    // Static routes
    const routes = [
        '',
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic feature routes
    const featureRoutes = Object.values(content.pages).map((page) => ({
        url: `${baseUrl}/feature/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...featureRoutes];
}
