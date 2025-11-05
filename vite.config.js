import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detecta si estamos haciendo build para GitHub Pages
const isGhPages = import.meta.env.VITE_DEPLOY_ENV === "GH_PAGES";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? "/palacio_san_juan/" : "/", // ✅ base dinámica
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
