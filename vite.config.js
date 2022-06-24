import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/desafio-portfolio-rockseat/',
  plugins: [react()],
  // server: {
  //   host: "192.168.100.101",
  // },
});
