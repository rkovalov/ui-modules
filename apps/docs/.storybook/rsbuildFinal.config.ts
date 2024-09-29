import { resolve } from 'node:path';
import { mergeRsbuildConfig } from '@rsbuild/core';
import type { RsbuildConfig } from '@rsbuild/core';
// import { logJson } from './utils';

export const rsbuildFinalconfig = {
  async rsbuildFinal(config: RsbuildConfig, { _configType }: { _configType: string }) {
    // console.log(logJson(config));
    // console.log({ configType });
    // Be sure to return the customized config
    return mergeRsbuildConfig(config, {
      // Customize the Rsbuild config for Storybook
      // tools: {
      //   rspack: (config, { _addRules, _appendPlugins, _rspack, _mergeConfig }) => {
      //     // console.log(logNestedJson(config.module.rules));
      //     // addRules({
      //     //   // test: /\.(css|txt|md)$/i,
      //     //   resourceQuery: /\?raw/,
      //     //   type: 'asset/source',
      //     // });
      //     // config.module.rules.push({
      //     //   // test: /\.(css|txt|md)$/i,
      //     //   resourceQuery: /\?raw/,
      //     //   type: 'asset/source',
      //     //   // use: (info) => {
      //     //   //   console.log('Raw import detected:', info);
      //     //   //   return {
      //     //   //     loader: 'asset/source',
      //     //   //   };
      //     //   // },
      //     //   // loader: (info) => {
      //     //   //   console.log('Raw import detected:', info);
      //     //   //   return 'asset/source';
      //     //   // },
      //     //   // type: 'asset/source',
      //     // });
      //     // config.experiments = {
      //     //   ...config.experiments,
      //     //   topLevelAwait: true,
      //     //   importAsync: true,
      //     //   importAwait: true,
      //     // };

      //     return config;
      //   },
      // },
      source: {
        alias: {
          '@nvision/ui': resolve(__dirname, '../../../packages/ui/dist'),
          '@nvision/utils': resolve(__dirname, '../../../packages/utils/dist'),
          '@nvision/themes/tokens.css': resolve(__dirname, '../../../packages/themes/dist/tokens/all.css'),
          '@nvision/themes/brand-tokens.css': resolve(
            __dirname,
            '../../../packages/themes/dist/themes/brand-tokens.css',
          ),
          '@nvision/themes/light.css': resolve(__dirname, '../../../packages/themes/dist/themes/light/light.css'),
          '@nvision/themes/dark.css': resolve(__dirname, '../../../packages/themes/dist/themes/dark/dark.css'),
          // '@nvision/utils': resolve(__dirname, '../../packages/utils'),
        },
        define: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
      },
    });
  },
};
