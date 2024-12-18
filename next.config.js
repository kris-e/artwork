/** @type {import('next').NextConfig} */
// env variable for prod
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: '/assets/img/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.youtube.com',
        port: '',
        search: '',
      },
    ],
  },
  assetPrefix: isProd ? 'kristinerken.com/' : '',
  basePath: isProd ? '' : '',
}

module.exports = nextConfig
