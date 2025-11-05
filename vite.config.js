import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Detecta si estamos haciendo deploy en GitHub Pages
 * Esto funciona porque tu script de deploy es "npm run deploy"
 */
const isGhPages = process.env.npm_lifecycle_event === "deploy";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? "/palacio_san_juan/" : "/", // ✅ dinámico según entorno
  build: {
    outDir: "dist", // opcional, por defecto es "dist"
    sourcemap: false, // opcional: evita map files innecesarios en producción
  },
});
