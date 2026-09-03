import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "gsap/ScrollSmoother": path.resolve(__dirname, "src/plugins/ScrollSmoother.js"),
      "gsap/SplitText": path.resolve(__dirname, "src/plugins/SplitText.js"),
      "gsap-trial/ScrollSmoother": path.resolve(__dirname, "src/plugins/ScrollSmoother.js"),
      "gsap-trial/SplitText": path.resolve(__dirname, "src/plugins/SplitText.js"),
      "gsap-trial": path.resolve(__dirname, "node_modules/gsap"),
    },
  },
});
