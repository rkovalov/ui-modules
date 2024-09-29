import type { Meta, StoryObj } from '@storybook/react';
import { CSSContent } from '../_components/css-content';

const Template: React.FC = () => {
  return (
    <>
      <h1>Tokens</h1>
      <br />
      <h2>Border Radius</h2>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./_border-radius.css')} />
      <br />
      <h2>Shadows</h2>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./_shadows.css')} />
      <br />
      <h2>Sizing</h2>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./_sizing.css')} />
      <br />
      <h2>Transition</h2>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./_transition.css')} />
      <br />
      <h2>Typography</h2>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./_typography.css')} />
      <br />
      <h2>Z-Index</h2>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./_z-index.css')} />
    </>
  );
};

const meta: Meta<typeof Template> = {
  component: Template,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Template>;

export const Primary: Story = {
  parameters: {
    design: {
      url: 'https://www.figma.com/',
    },
  },
  render: (props: any) => <Template {...props} />,
  args: {},
};
