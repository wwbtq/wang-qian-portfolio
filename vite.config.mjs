import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  optimizeDeps: {
    include: ["vue", "gsap", "swiper/vue"],
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ["158743.xyz", "www.158743.xyz"],
    warmup: {
      clientFiles: ["./src/main.ts"],
    },
  },
  preview: {
    host: true,
  },
  plugins: [vue()],
});
