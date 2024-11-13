import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yaw-page/',  // Set the base path to your GitHub Pages repository name
});