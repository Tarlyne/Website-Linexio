import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// trigger rebuild
export default defineConfig({
  plugins: [react()],
  // Leerer String sorgt für komplett relative Pfade in der index.html (best practice für GH Pages)
  base: '', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
