// vite.config.js
import { defineConfig } from "file:///home/m6hdix/Desktop/react-version-2/node_modules/vite/dist/node/index.js";
import react from "file:///home/m6hdix/Desktop/react-version-2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///home/m6hdix/Desktop/react-version-2/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  base: "/metaverse",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "swiper/react": "swiper/react",
      swiper: "swiper"
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
          return `~/${relativeSourcePath}`;
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tNmhkaXgvRGVza3RvcC9yZWFjdC12ZXJzaW9uLTJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL202aGRpeC9EZXNrdG9wL3JlYWN0LXZlcnNpb24tMi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tNmhkaXgvRGVza3RvcC9yZWFjdC12ZXJzaW9uLTIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL21ldGF2ZXJzZVwiLFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcInN3aXBlci9yZWFjdFwiOiBcInN3aXBlci9yZWFjdFwiLFxuICAgICAgc3dpcGVyOiBcInN3aXBlclwiLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBzb3VyY2VtYXBQYXRoVHJhbnNmb3JtOiAocmVsYXRpdmVTb3VyY2VQYXRoLCBzb3VyY2VtYXBQYXRoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGB+LyR7cmVsYXRpdmVTb3VyY2VQYXRofWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxvQkFBb0I7QUFDM1QsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUFBLEVBQ3pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGdCQUFnQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sd0JBQXdCLENBQUMsb0JBQW9CLGtCQUFrQjtBQUM3RCxpQkFBTyxLQUFLLGtCQUFrQjtBQUFBLFFBQ2hDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
