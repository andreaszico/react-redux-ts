import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@atoms": path.resolve(__dirname, "src/components/atoms/"),
      "@moleculs": path.resolve(__dirname, "src/components/moleculs/"),
      "@organisms": path.resolve(__dirname, "src/components/organisms/"),
    },
  },
});
