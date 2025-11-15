/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true';

const nextConfig = {
  // Do NOT statically export by default; this preserves API routes on Vercel.
  ...(isStaticExport ? { output: 'export' } : {}),
  // Avoid forcing trailing slashes which can interfere with API route matching.
  trailingSlash: false,
  images: isStaticExport
    ? { unoptimized: true }
    : {}
};

module.exports = nextConfig;
