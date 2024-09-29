import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import packageJson from './package.json';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test{s,}.ts{x,}'],
    setupFiles: './tests/setup.ts',
    globals: true,
    alias: {
      [packageJson.name]: path.resolve(__dirname, './dist'),
    },
  },
});
