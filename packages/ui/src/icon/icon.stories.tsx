import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../dist';

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    name: {
      options: ['plus', 'circle-help', 'calendar', 'circle-plus', 'arrow-left', 'ellipsis-vertical'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Secondary: Story = {
  parameters: {
    design: {
      url: 'https://www.figma.com/design/sREHUZ7pk6Kmxhky4P75Zm/Design-System---UI-ver-1.0?node-id=1-634&node-type=CANVAS&t=Ks9X3ZP9RtDopXPZ-0',
    },
  },
  render: (props: React.ComponentProps<typeof Icon>) => <Icon {...props} />,
  name: 'Icons',
  args: {
    name: 'plus',
    spin: false,
  },
};
