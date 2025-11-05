import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detecta si estamos haciendo build para GitHub Pages
const isGhPages = process.env.VITE_DEPLOY_ENV === "GH_PAGES";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? "/palacio_san_juan/" : "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
