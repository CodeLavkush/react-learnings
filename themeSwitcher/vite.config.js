import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  darkMode: "dark",
  plugins: [
    tailwindcss(),
  ],
})