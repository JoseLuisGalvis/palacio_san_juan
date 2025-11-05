import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Detecta automáticamente si estás desplegando en GitHub Pages
const isGhPages = process.env.NODE_ENV === "ghpages";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? "/palacio_san_juan/" : "/", // base dinámica
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
