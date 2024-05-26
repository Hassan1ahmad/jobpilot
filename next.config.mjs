// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'remotive.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
