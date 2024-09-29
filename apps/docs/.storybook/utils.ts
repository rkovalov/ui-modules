import { dirname, join } from 'node:path';

export function logJson(data: Record<string, unknown>) {
  console.log(
    JSON.stringify(
      data,
      (_key, value) => {
        if (value instanceof RegExp) {
          return value.toString(); // Convert RegExp to string
        }
        return value; // Return other values as is
      },
      2,
    ),
  ); // Pretty-print with indentation
}

export function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}
