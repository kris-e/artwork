/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      {
        pathname: '/assets/img/**',
        search: '',
      },
    ],
  },
}

module.exports = nextConfig
