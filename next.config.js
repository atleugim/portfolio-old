/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
};

module.exports = nextConfig;
