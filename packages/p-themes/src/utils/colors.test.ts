import { isDark } from './colors';

describe('Colors::isDark', () => {
  it('should return true for dark colors', () => {
    expect(isDark('#000000')).toBe(true);
    expect(isDark('#333333')).toBe(true);
    expect(isDark('#666666')).toBe(true);
    expect(isDark('#999999')).toBe(true);
  });

  it('should return false for light colors', () => {
    expect(isDark('#FFFFFF')).toBe(false);
    expect(isDark('#CCCCCC')).toBe(false);
  });
});
