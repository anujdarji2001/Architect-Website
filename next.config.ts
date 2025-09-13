/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static HTML export
  basePath: process.env.NODE_ENV === "production" ? "/Architect-Website" : "",
  images: { unoptimized: true }, // GitHub Pages doesn’t support Next.js Image Optimization
};

export default nextConfig;
