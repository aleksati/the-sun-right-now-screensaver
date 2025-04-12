import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // This makes Vite generate relative URLs. I need this to make npm run build work
  plugins: [react(), tailwindcss()],
  server: {
    port: 8000,
  },
});
