import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:"./",
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5000", // backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
