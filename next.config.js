/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
