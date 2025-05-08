import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

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
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
