// vite.config.ts
import { defineConfig } from "file:///C:/Users/gayat/Downloads/birthday-website/birthday/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/gayat/Downloads/birthday-website/birthday/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/gayat/Downloads/birthday-website/birthday/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\gayat\\Downloads\\birthday-website\\birthday";
var rawPort = process.env.PORT || "5173";
var port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}
var basePath = process.env.BASE_PATH || "/";
var vite_config_default = defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "..", "..", "attached_assets")
    },
    dedupe: ["react", "react-dom"]
  },
  root: path.resolve(__vite_injected_original_dirname),
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true
    }
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnYXlhdFxcXFxEb3dubG9hZHNcXFxcYmlydGhkYXktd2Vic2l0ZVxcXFxiaXJ0aGRheVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZ2F5YXRcXFxcRG93bmxvYWRzXFxcXGJpcnRoZGF5LXdlYnNpdGVcXFxcYmlydGhkYXlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2dheWF0L0Rvd25sb2Fkcy9iaXJ0aGRheS13ZWJzaXRlL2JpcnRoZGF5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IHJhd1BvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IFwiNTE3M1wiO1xuXG5jb25zdCBwb3J0ID0gTnVtYmVyKHJhd1BvcnQpO1xuXG5pZiAoTnVtYmVyLmlzTmFOKHBvcnQpIHx8IHBvcnQgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgUE9SVCB2YWx1ZTogXCIke3Jhd1BvcnR9XCJgKTtcbn1cblxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5CQVNFX1BBVEggfHwgXCIvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IGJhc2VQYXRoLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0YWlsd2luZGNzcygpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoaW1wb3J0Lm1ldGEuZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICBcIkBhc3NldHNcIjogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcImF0dGFjaGVkX2Fzc2V0c1wiKSxcbiAgICB9LFxuICAgIGRlZHVwZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gIH0sXG4gIHJvb3Q6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lLCBcImRpc3QvcHVibGljXCIpLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0LFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgYWxsb3dlZEhvc3RzOiB0cnVlLFxuICAgIGZzOiB7XG4gICAgICBzdHJpY3Q6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgYWxsb3dlZEhvc3RzOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9WLFNBQVMsb0JBQW9CO0FBQ2pYLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxVQUFVLFFBQVEsSUFBSSxRQUFRO0FBRXBDLElBQU0sT0FBTyxPQUFPLE9BQU87QUFFM0IsSUFBSSxPQUFPLE1BQU0sSUFBSSxLQUFLLFFBQVEsR0FBRztBQUNuQyxRQUFNLElBQUksTUFBTSx3QkFBd0IsT0FBTyxHQUFHO0FBQ3BEO0FBRUEsSUFBTSxXQUFXLFFBQVEsSUFBSSxhQUFhO0FBRTFDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBcUIsS0FBSztBQUFBLE1BQzVDLFdBQVcsS0FBSyxRQUFRLGtDQUFxQixNQUFNLE1BQU0saUJBQWlCO0FBQUEsSUFDNUU7QUFBQSxJQUNBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsTUFBTSxLQUFLLFFBQVEsZ0NBQW1CO0FBQUEsRUFDdEMsT0FBTztBQUFBLElBQ0wsUUFBUSxLQUFLLFFBQVEsa0NBQXFCLGFBQWE7QUFBQSxJQUN2RCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ047QUFBQSxJQUNBLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
