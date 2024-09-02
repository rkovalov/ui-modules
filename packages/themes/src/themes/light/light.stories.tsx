import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from '../../_components/color-palette';
import { CSSContent, useCssContent } from '../../_components/css-content';

const Template: React.FC = () => {
  // @ts-ignore
  // biome-ignore lint: reason
  const { content: contentBlue, tokens: tokensBlue } = useCssContent(import.meta.resolve('./tokens/blue.css'));
  // biome-ignore lint: reason
  const { content: contentGrayBright, tokens: tokensGrayBright } = useCssContent(
    // @ts-ignore
    import.meta.resolve('./tokens/gray-bright.css'),
  );
  // biome-ignore lint: reason
  const { content: contentGrayFlat, tokens: tokensGrayFlat } = useCssContent(
    // @ts-ignore
    import.meta.resolve('./tokens/gray-flat.css'),
  );
  // biome-ignore lint: reason
  const { content: contentGrayNeutral, tokens: tokensGrayNeutral } = useCssContent(
    // @ts-ignore
    import.meta.resolve('./tokens/gray-neutral.css'),
  );

  console.log({ tokensGrayNeutral });

  // @ts-ignore
  // biome-ignore lint: reason
  const { content: contentRed, tokens: tokensRed } = useCssContent(import.meta.resolve('./tokens/red.css'));
  // @ts-ignore
  // biome-ignore lint: reason
  const { content: contentWhite, tokens: tokensWhite } = useCssContent(import.meta.resolve('./tokens/white.css'));

  return (
    <>
      <h1>Light Theme Tokens</h1>
      <code>
        <a
          href="https://spectrum.adobe.com/page/color-fundamentals/#Color-themes-and-modes"
          target="_blank"
          rel="noreferrer"
        >
          Color-themes
        </a>
        <br />
        As the color token name increases in number (e.g., blue-700, blue-800, blue-900), the color value’s contrast
        with the background also increases. Because of this, colors progressively get darker in light theme and lighter
        in dark themes.
      </code>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2px' }}>
        <div>
          <ColorPalette colors={tokensBlue} title="Blue" />
          {/* <pre>{contentBlue}</pre> */}
        </div>
        <div>
          <ColorPalette colors={tokensGrayBright} title="Gray Bright" />
          {/* <pre>{contentGrayBright}</pre> */}
        </div>
        <div>
          <ColorPalette colors={tokensGrayFlat} title="Gray Flat" />
          {/* <pre>{contentGrayFlat}</pre> */}
        </div>
        <div>
          <ColorPalette colors={tokensGrayNeutral} title="Gray Neutral" />
          {/* <pre>{contentGrayNeutral}</pre> */}
        </div>
        <div>
          <ColorPalette colors={tokensRed} title="Red" />
          {/* <pre>{contentRed}</pre> */}
        </div>
        <div>
          <ColorPalette colors={tokensWhite} title="White" />
          {/* <pre>{contentWhite}</pre> */}
        </div>
      </div>
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
  args: {},
};
