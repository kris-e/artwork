/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './src/loader.js',
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
}

module.exports = nextConfig
