import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/2024-week3-4/",
  resolve: {
    alias: {
      assets: "../../assets",
      sass: "../../assets/sass",
      "assets-images": "../../assets/images",
    },
  },
});
