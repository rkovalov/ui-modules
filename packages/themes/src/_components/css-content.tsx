import { useEffect, useMemo, useState } from 'react';
import { parseCSSVariables } from '../utils/tokens';
const removeComments = (str: string) => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

export const useCssContent = (path: string) => {
  const [content, setContent] = useState('');
  const tokens = useMemo(() => parseCSSVariables(content), [content]);
  useEffect(() => {
    // Adding ?raw to import as a string (works in environments like Vite)
    import(`${path}?raw`)
      .then((module) => module.default)
      .then((content) => {
        setContent(removeComments(content));
      });
  }, []);
  return { content, tokens };
};

export const CSSContent = ({ path }: { path: string }) => {
  const { content } = useCssContent(path);
  return <pre>{content}</pre>;
};
