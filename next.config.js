/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: {
      LogLevel: 'silent'
    }
  }
}

module.exports = nextConfig
