/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    IS_DEBUG: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;
