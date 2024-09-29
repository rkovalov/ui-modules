const { banWords } = require('cspell-ban-words');

module.exports = {
  version: '0.2',
  language: 'en',
  files: ['**/*.{ts,tsx,js,jsx,md,mdx,yml,json}'],
  useGitignore: true,
  enableFiletypes: ['mdx'],
  ignoreRegExpList: [
    // ignore markdown anchors such as [modifyRsbuildConfig](#modifyrsbuildconfig)
    '#.*?\\)',
  ],
  ignorePaths: ['dist', 'dist-*', 'compiled', 'coverage', 'doc_build', 'node_modules', 'pnpm-lock.yaml'],
  flagWords: banWords,

  dictionaries: ['default-dictionary', 'custom-dictionary', 'yaml-dictionary'],
  dictionaryDefinitions: [
    {
      name: 'default-dictionary',
      path: './dictionaries/default.txt',
      addWords: true,
    },
    {
      name: 'custom-dictionary',
      path: './dictionaries/custom.txt',
      addWords: true,
    },
    {
      name: 'yaml-dictionary',
      path: './dictionaries/yaml.txt',
      addWords: true,
    },
  ],
};
