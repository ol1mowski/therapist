// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/therapist/', // Dostosuj do nazwy swojego repozytorium na GitHubie
  plugins: [react()],
  build: {
    outDir: 'build', // Dostosuj do katalogu docelowego, np. 'docs' dla GitHub Pages
  },
})
