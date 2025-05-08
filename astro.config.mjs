import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://mv-kfz.com",
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: [],
    remotePatterns: [],
    quality: 80,
    format: ["webp"],
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.webp"],
  },
});
