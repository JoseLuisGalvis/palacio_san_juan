import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // Aumenta el límite a 1000 KB
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa las librerías principales
          "react-vendor": ["react", "react-dom"],
          "bootstrap-vendor": ["bootstrap"],
          "lucide-vendor": ["lucide-react"],
          "aos-vendor": ["aos"],
        },
      },
    },
  },
});
