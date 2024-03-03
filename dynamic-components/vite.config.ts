/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    include: ["tests/**/*.test.ts?(x)"],
    coverage: {
      exclude: ["tests/**/*.test.ts?(x)"],
      provider: "v8",
      reportOnFailure: true,
    },
    css: true,
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitestSetup.ts",
  },
});
