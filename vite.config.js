import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'three/examples/jsm/controls/OrbitControls',
      'three/examples/jsm/loaders/GLTFLoader'
    ],
    exclude: ['@react-three/postprocessing']
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 5173,
      protocol: 'ws',
      host: 'localhost'
    },
    fs: {
      strict: false
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
});