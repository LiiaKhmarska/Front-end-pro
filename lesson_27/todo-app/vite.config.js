import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@todolist": resolve(__dirname, "src/todo-list"),
      "@context": resolve(__dirname, "src/context"),
    },
  },
});
