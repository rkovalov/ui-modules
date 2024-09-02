// Replace your-framework with the framework you are using (e.g., react, vue3)
// import React from 'react';
import type { Preview } from '@storybook/react';
import '@ui-modules/themes/tokens.css';
import '@ui-modules/themes/light.css';
import '@ui-modules/themes/brand-tokens.css'; // TODO: based on light vs dark
import './index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    design: { type: 'figma' },
    docs: {
      source: { type: 'code' },
    },
    // storySort: {
    //   method: 'alphabetical',
    // },
    storySort: (a, b) => {
      return a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
    },
  },
};

export default preview;
