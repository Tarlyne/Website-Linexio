const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export (GitHub Pages compatible if needed)
  basePath: isProd ? '/Website-Linexio' : '',
  assetPrefix: isProd ? '/Website-Linexio/' : '',
  images: {
    unoptimized: true, // Required for 'export' unless using a custom loader
  },
};

export default nextConfig;
