import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Décommentez et adaptez si vous déployez dans un sous-dossier (ex: GitHub Pages) :
  // base: '/polyclinique-hub/',
})
