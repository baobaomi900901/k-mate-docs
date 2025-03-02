import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "vitepress/dist": path.resolve(__dirname, "node_modules/vitepress/dist"),
    },
  },
});
