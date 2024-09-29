import { rsbuildFinalconfig } from './rsbuildFinal.config';
import { getAbsolutePath } from './utils';
import { viteFinalConfig } from './viteFinal.config';

import ThemePackageJson from '../../../packages/p-themes/package.json';
import UIPackageJson from '../../../packages/p-ui/package.json';
import UtilsPackageJson from '../../../packages/p-utils/package.json';

type Compiler = 'vite' | 'rsbuild';

const compiler: Compiler = (process.env.COMPILER as Compiler) ?? 'vite';

function getFrameworkPath(compiler: Compiler): string {
  switch (compiler) {
    case 'vite':
      return '@storybook/react-vite';
    case 'rsbuild':
      return 'storybook-react-rsbuild';
    default:
      return '@storybook/react-vite';
  }
}

const frameworkPath = getFrameworkPath(compiler);

function getCompilerConfig(compiler: Compiler): Record<string, unknown> {
  switch (compiler) {
    case 'vite':
      return viteFinalConfig;
    case 'rsbuild':
      return rsbuildFinalconfig;
    default:
      return viteFinalConfig;
  }
}

// rsbuild now unexpectedly slower than Vite for storybook
// check in upcoming versions

const config = {
  stories: [
    '../stories/**/*.stories.tsx',
    // '../../../packages/*/src/**/*.stories.tsx',
    {
      directory: '../../../packages/p-ui/src',
      titlePrefix: `UI:${UIPackageJson.version}/`,
    },
    {
      directory: '../../../packages/p-themes/src',
      titlePrefix: `Themes:${ThemePackageJson.version}/`,
    },
    {
      directory: '../../../packages/p-utils/src',
      titlePrefix: `Themes:${UtilsPackageJson.version}/`,
    },
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-designs'),
  ],
  docs: {},
  core: {},
  framework: {
    name: getAbsolutePath(frameworkPath),
    options: {},
  },
  ...getCompilerConfig(compiler),
};

export default config;
