/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["agencia-assets.s3.us-east-2.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    IS_DEBUG: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;
