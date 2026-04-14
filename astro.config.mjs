import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://briighter.github.io',
  base: '/piretti-health',
  integrations: [tailwind()],
  output: 'static',
});
