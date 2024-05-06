import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'happy-first-anniversary-ishypoo',
  plugins: [react()],
  define: {
    global: {},
  },
});
