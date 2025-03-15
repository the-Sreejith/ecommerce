import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co', 'placeholder.com', 'via.placeholder.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
