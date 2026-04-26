import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@hooks": path.resolve(__dirname, "./src/hooks/")
    }
  },
  plugins: [react(), tailwindcss()],
})
