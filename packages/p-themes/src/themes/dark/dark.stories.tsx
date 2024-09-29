import type { Meta, StoryObj } from '@storybook/react';
import { CSSContent } from '../../_components/css-content';

const Template: React.FC = () => {
  return (
    <>
      <h1>Dark Theme Tokens</h1>
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./tokens/blue.css')} />
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./tokens/gray-bright.css')} />
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./tokens/gray-flat.css')} />
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./tokens/gray-neutral.css')} />
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./tokens/red.css')} />
      {/* @ts-ignore */}
      <CSSContent path={import.meta.resolve('./tokens/white.css')} />
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
      url: 'https://www.figma.com/design/uccwxEcuMtvHhPTPMp7YKm/Figma-basics',
    },
  },
  render: (props: any) => <Template {...props} />,
  args: {},
};