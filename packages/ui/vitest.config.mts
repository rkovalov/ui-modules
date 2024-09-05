import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ["**/*.test{s,}.ts{x,}"],
    setupFiles: './tests/setup.ts',
    globals: true,
  },
});
