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
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@icon-components": path.resolve(__dirname, "./src/components/icons"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@modals": path.resolve(__dirname, "./src/components/modals"),
      "@styles": path.resolve(__dirname, "./src/assets/styles/styles.js"),
      "@inputs": path.resolve(__dirname, "./src/components/inputs"),
      "@tables": path.resolve(__dirname, "./src/components/tables"),
      "@enums": path.resolve(__dirname, "./src/enums/"),
      "@buttons": path.resolve(__dirname, "./src/components/buttons")
    }
  },
  plugins: [react(), tailwindcss()],
})
