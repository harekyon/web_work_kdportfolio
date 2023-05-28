/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: { unoptimized: true },
  assetPrefix: prefixPath,
  basePath: prefixPath,
  reactStrictMode: true,
};

module.exports = nextConfig;
