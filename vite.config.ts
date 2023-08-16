import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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
