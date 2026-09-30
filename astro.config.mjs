import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// [[DA COMPILARE: dominio canonico del cliente, es. https://www.nomestudio.it]]
export default defineConfig({
  site: 'https://esempio-dominio.it',
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  build: { format: 'directory' },
});
