import { dirname, join, resolve } from 'node:path';
import ThemePackageJson from '../../../packages/themes/package.json';
import UIPackageJson from '../../../packages/ui/package.json';
import UtilsPackageJson from '../../../packages/utils/package.json';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

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
      titlePrefix: `Utils:${UtilsPackageJson.version}/`,
    },
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-designs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {},

  async viteFinal(config, { _configType }) {
    const { mergeConfig } = await import('vite');
    // customize the Vite config here
    // console.log(JSON.stringify(config, null, 2));
    // console.log(configType);
    return mergeConfig(config, {
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@ui-modules/ui',
            replacement: resolve(__dirname, '../../../packages/p-ui'),
          },
          {
            find: '@ui-modules/themes/tokens.css',
            replacement: resolve(__dirname, '../../../packages/p-themes/dist/tokens/all.css'),
          },
          {
            find: '@ui-modules/themes/light.css',
            replacement: resolve(__dirname, '../../../packages/p-themes/dist/themes/light/light.css'),
          },
          {
            find: '@ui-modules/themes/brand-tokens.css',
            replacement: resolve(__dirname, '../../../packages/p-themes/dist/themes/brand-tokens.css'),
          },
        ],
      },
    });
  },
  docs: {
    autodocs: true,
  },
};

export default config;
