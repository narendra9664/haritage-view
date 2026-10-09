import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a single static page, so it's exported as plain HTML in out/
  // and needs no Next.js server or hosting adapter (see netlify.toml).
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
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
