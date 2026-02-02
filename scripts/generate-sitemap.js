import fs from 'fs';
import { content } from './lib/content.js';

const baseUrl = 'https://tarlyne.github.io/Website-Linexio';

function generateSitemap() {
    const staticRoutes = ['', '/faq', '/impressum', '/datenschutz'];
    const dynamicRoutes = Object.values(content.pages).map(page => `/feature/${page.slug}`);

    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully in ./public/sitemap.xml');
}

generateSitemap();
