/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.firefitness-okayama.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
