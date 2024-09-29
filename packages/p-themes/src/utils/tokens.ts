export const parseCSSVariables = (cssContent: string) => {
  // Define a regex pattern to match CSS variables for different color schemes
  // const regex = /--nv-color-(\w+)-(\d{2,3}):\s*([^;]*)/g;
  const regex = /--nv-color-([\w-]+)-(\d{2,3}):\s*([^;]+)/g;
  const colors = [];

  let match = regex.exec(cssContent);
  while (match !== null) {
    const [, colorScheme, shade, hex] = match;
    if (hex?.trim()) {
      colors.push({
        shade,
        hex: hex.trim(),
        token: `--nv-color-${colorScheme}-${shade}`,
      });
    }
    // Move to the next match
    match = regex.exec(cssContent);
  }

  return colors;
};
