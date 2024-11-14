import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  //site: 'https://duandresmina.github.io',
  //base: 'Landing-restaurant-v2',
  output: 'server',
  adapter: vercel()
});