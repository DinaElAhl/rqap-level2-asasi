import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo>/, so base must match in build.
export default defineConfig({
  plugins: [react()],
  base: './',
})
