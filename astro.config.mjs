import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mercedesastorima.academy',
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});
