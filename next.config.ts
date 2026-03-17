/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Fix the "quality 100" warning
    qualities: [25, 50, 75, 100],

    // 2. Allow external image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.kiwi.com', // For Airline Logos
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // For Testimonial Faces
      },
    ],
  },
};

export default nextConfig;