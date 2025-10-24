import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'widget.js',
        assetFileNames: (assetInfo) => assetInfo.name?.endsWith('.css') ? 'widget.css' : '[name].[ext]'
      }
    }
  }
});