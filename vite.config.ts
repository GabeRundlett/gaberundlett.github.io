import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gaberundlett.github.io/',
  plugins: [react(), eslintPlugin()],
  build: {
    outDir: './docs'
  }
});
