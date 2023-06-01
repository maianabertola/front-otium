import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: { port:  },
});

//vite config.js
//backend config index.js -> réconcilier les ports
