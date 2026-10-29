import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { criticalCssPlugin } from "./vite-plugin-critical-css";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), criticalCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    // Don't inline images as base64 — keeps them as separate files for preloading
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
