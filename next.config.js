/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
