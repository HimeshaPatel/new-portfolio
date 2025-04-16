import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  root: './', // Make sure this points to the directory containing index.html
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    commonjsOptions: {
      include: [/three/, /@react-three/, /maath/]
    }
  }
});

