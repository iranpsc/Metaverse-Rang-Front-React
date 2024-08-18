import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/metaverse",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "swiper/react": "swiper/react",
      swiper: "swiper",
    },
  },
});
