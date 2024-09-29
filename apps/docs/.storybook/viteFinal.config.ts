import { resolve } from 'node:path';
import type { UserConfig } from 'vite';

export const viteFinalConfig = {
  async viteFinal(config: UserConfig, { _configType }: { _configType: string }) {
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
            replacement: resolve(__dirname, '../../../packages/p-ui/dist'),
          },
          {
            find: '@ui-modules/utils',
            replacement: resolve(__dirname, '../../../packages/p-utils/dist'),
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
};
