import { parseCSSVariables } from './tokens';

describe('parseCSSVariables', () => {
  it('should parse CSS variables correctly', () => {
    const cssContent = `
      :root {
        --nv-color-blue-10: #4567b7;
        --nv-color-blue-20: #4567b7;
        --nv-color-blue-30: #4567b7;
        --nv-color-red-10: #ff0000;
        --nv-color-red-20: #ff0000;
        --nv-color-red-30: #ff0000;
        --nv-color-gray-neutral-30: #F1F1F1;
      }
    `;

    const expected = [
      { shade: '10', hex: '#4567b7', token: '--nv-color-blue-10' },
      { shade: '20', hex: '#4567b7', token: '--nv-color-blue-20' },
      { shade: '30', hex: '#4567b7', token: '--nv-color-blue-30' },
      { shade: '10', hex: '#ff0000', token: '--nv-color-red-10' },
      { shade: '20', hex: '#ff0000', token: '--nv-color-red-20' },
      { shade: '30', hex: '#ff0000', token: '--nv-color-red-30' },
      { shade: '30', hex: '#F1F1F1', token: '--nv-color-gray-neutral-30' },
    ];

    expect(parseCSSVariables(cssContent)).toEqual(expected);
  });
});
