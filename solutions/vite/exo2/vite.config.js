import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: { port: 8080 },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
