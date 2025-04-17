import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      'react': path.resolve(__dirname, './node_modules/react'),
    },
  },
  root: './',
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components', 'three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    commonjsOptions: {
      include: [/three/, /@react-three/, /maath/, /node_modules/],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});


