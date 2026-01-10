import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages deployment base path
// Repository: cole-man11/pm-portfolio
const repoName = process.env.REPO_NAME || 'pm-portfolio';
const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
  },
})
