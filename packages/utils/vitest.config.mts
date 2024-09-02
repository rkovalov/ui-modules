// import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // plugins: [react()],
  plugins: [],
  test: {
    include: ["**/*.test{s,}.ts{x,}"],
    globals: true,
  },
});
