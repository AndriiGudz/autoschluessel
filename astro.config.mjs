import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://mv-kfz.netlify.app',
  output: 'server',
  adapter: netlify(),
});
