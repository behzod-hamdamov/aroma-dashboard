import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@api": path.resolve(__dirname, "./src/api/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
    }
  },
  plugins: [react(), tailwindcss()],
})
