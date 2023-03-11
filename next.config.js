/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  distDir: '_next',
  env: {
    BASE_URL: dev ? 'https://admin.natadesign.id/' : 'https://admin.natadesign.id/',
    CACHE_TIME: dev ? 10 : 3600,
  },
  images: {
    unoptimized: true,
    domains: [dev ? '127.0.0.1' : 'admin.natadesign.id'],
  },
}

module.exports = nextConfig
