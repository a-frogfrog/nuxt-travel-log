import antfu from '@antfu/eslint-config';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    rules: {
      'semi': ['error', 'always'],
      'unicorn/filename-case': ['error', {
        case: 'camelCase',
        ignore: [

        ],
      }],
    },
  }),
);
// Your custom configs here
