import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), ViteMinifyPlugin()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js', // If you need a specific file name, comment out
        //chunkFileNames: 'js/[name]-[hash].js',
      },
    },
  },

  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
});
