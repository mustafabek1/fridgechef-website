/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Needed for a 404 page because Turkish and English have separate root layouts.
    globalNotFound: true,
  },
};

module.exports = nextConfig;
