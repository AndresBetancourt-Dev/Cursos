/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //appDir: true, //Node v16.8.0
    //concurrentFeatures: true,
    //serverComponents: true,
    swcMinify: true,
    urlImports: ["https://cdnjs.com", "https://cdn.skypack.dev"],
  },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
