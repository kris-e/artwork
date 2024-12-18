/** @type {import('next').NextConfig} */
// env variable for prod
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    // loader: 'custom',
    // loaderFile: './src/loader.js',
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
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
}

module.exports = nextConfig
