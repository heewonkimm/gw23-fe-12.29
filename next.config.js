/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  // buildActivity: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: `${process.env.API_URL}/apis/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
