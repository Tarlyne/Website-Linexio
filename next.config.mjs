/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export (GitHub Pages compatible if needed)
  images: {
    unoptimized: true, // Required for 'export' unless using a custom loader
  },
  // If not using 'export', comment out the above lines and uncomment below if using specific optimization
  /*
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  */
};

export default nextConfig;
