/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    IS_DEBUG: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;
