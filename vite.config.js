import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',

  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },

  server: {
    port: 5173,
    open: true,
    host: true
  },

  resolve: {
    alias: {
      '@': '/src'
    }
  },

  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
