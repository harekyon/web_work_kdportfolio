/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const prefixPath = isProd ? "/kd" : "";

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
