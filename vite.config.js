import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), react(), svgr(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
