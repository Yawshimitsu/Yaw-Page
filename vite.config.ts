import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yaw-page/',  // Set the correct base path for GitHub Pages
});