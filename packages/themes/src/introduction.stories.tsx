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
      url: 'https://www.figma.com/design/sREHUZ7pk6Kmxhky4P75Zm/Design-System---UI-ver-1.0?node-id=1-1932&t=LRLWPAaPAmVsnFyX-0',
    },
  },
  render: (props: any) => <Template {...props} />,
  name: 'Introductions',
  args: {},
};
