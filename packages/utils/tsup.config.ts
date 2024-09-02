import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...options,
  entryPoints: ["src/**/!(*.d|*.stories|*.test).{ts,tsx}"],
  format: ["cjs", "esm"],
  bundle: false,
  dts: true,
  sourcemap: true,
  splitting: false,
  external: ["react"],
  minify: !options.watch,
}));
