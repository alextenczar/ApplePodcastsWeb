/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      unoptimized: true,
      remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
      },
    ],
  },
}

module.exports = nextConfig
