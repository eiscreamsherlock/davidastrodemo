// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  site: 'https://davidastrodemo.shuler-david-p-cloudflare.workers.dev',
  integrations: [preact()]
});