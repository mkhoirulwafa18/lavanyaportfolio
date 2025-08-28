import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable development mode indicators
  devIndicators: false,
  
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Enable page compression
  compress: true,
  
  // Cache build output
  poweredByHeader: false,
};

export default nextConfig;
