import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icon } from '@ui-modules/ui';
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    color: {
      options: ['brand', 'primary', 'secondary', 'destructive'],
      control: { type: 'select' },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outline', 'ghost'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  parameters: {
    design: {
      url: '',
    },
  },
  render: (props: React.ComponentProps<typeof Button>) => (
    <>
      <Button
        {...props}
        size="xs"
        data-testid="button"
        onPress={(): void => {
          console.log('Hello from Button!');
        }}
        iconLeft={<Icon name="apple" size={20} />}
        iconRight="apple"
      >
        xs
      </Button>
      <br />
      <Button
        {...props}
        size="sm"
        data-testid="button"
        onPress={(): void => {
          console.log('Hello from Button!');
        }}
      >
        small
      </Button>
      <br />
      <Button
        {...props}
        data-testid="button"
        onPress={(): void => {
          console.log('Hello from Button!');
        }}
      >
        medium
      </Button>
      <br />
      <Button
        {...props}
        data-testid="button"
        size="lg"
        onPress={(): void => {
          console.log('Hello from Button!');
        }}
      >
        large
      </Button>
      <br />
    </>
  ),
  name: 'Buttons',
  args: {
    children: 'Hello',
    isDisabled: false,
    isLoading: false,
    color: 'brand',
    type: 'button',
    variant: 'solid',
    style: {
      margin: '10px',
    },
  },
};
