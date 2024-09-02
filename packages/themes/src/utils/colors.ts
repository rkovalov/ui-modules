/**
 * Converts a hex color to its RGB components.
 * @param {string} hex - The hex color string.
 * @returns {[number, number, number]} - An array containing RGB values.
 */
const hexToRgb = (hex: string): [number, number, number] => {
  const sanitizedHex = hex.replace(/^#/, '');

  if (sanitizedHex.length === 6) {
    return [
      Number.parseInt(sanitizedHex.substring(0, 2), 16),
      Number.parseInt(sanitizedHex.substring(2, 4), 16),
      Number.parseInt(sanitizedHex.substring(4, 6), 16),
    ];
  }

  if (sanitizedHex.length === 3) {
    return [
      // biome-ignore lint: reason
      Number.parseInt(sanitizedHex[0]! + sanitizedHex[0], 16),
      // biome-ignore lint: reason
      Number.parseInt(sanitizedHex[1]! + sanitizedHex[1], 16),
      // biome-ignore lint: reason
      Number.parseInt(sanitizedHex[2]! + sanitizedHex[2], 16),
    ];
  }

  throw new Error('Invalid hex color');
};

/**
 * Calculates the luminance of an RGB color.
 * @param {[number, number, number]} rgb - An array containing RGB values.
 * @returns {number} - The luminance of the color.
 */
const luminance = ([r, g, b]: [number, number, number]): number => {
  const [rL, gL, bL] = [r, g, b].map((c): number => {
    const normalized = c / 255;
    // biome-ignore lint: reason
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  // biome-ignore lint: reason
  return 0.2126 * rL! + 0.7152 * gL! + 0.0722 * bL!;
};

/**
 * Checks if the given color is dark.
 * @param {string} hex - The color in hex format.
 * @returns {boolean} - True if the color is dark, false otherwise.
 */
export const isDark = (hex: string): boolean => {
  const rgb = hexToRgb(hex);
  const colorLuminance = luminance(rgb);
  // A common threshold for dark colors is luminance < 0.5
  return colorLuminance < 0.5;
};
