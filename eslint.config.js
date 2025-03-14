import pluginJs from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginPrettier,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  { settings: { react: { version: 'detect' } } },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],
      'react/self-closing-comp': 'error',
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
