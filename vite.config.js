import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Chequea la variable correcta que defines en package.json
const isGhPages = process.env.VITE_DEPLOY_ENV === "GH_PAGES";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? "/palacio_san_juan/" : "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
