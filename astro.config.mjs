import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://harmonious-parfait-30cc51.netlify.app/",
  integrations: [preact()]
});