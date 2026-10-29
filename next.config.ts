import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a plain HTML/CSS/JS site to /out,
  // which can be hosted free on Netlify, Vercel or any static host.
  output: "export",
  trailingSlash: true,
  images: {
    // Static hosting has no image server, so images in /public/images are
    // supplied pre-optimised (.webp/.avif) and served as-is.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
