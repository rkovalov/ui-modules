import type { Meta, StoryObj } from '@storybook/react';

const Template: React.FC = () => {
  return (
    <>
      <h1>Intro</h1>
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
  name: 'Introductions',
  args: {},
};
