module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'html',
    'node',
    '@typescript-eslint',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-shorthand': ['error', 'always'],
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-return-await': 'warn',
    'newline-after-var': ['error', 'always'],
    'import/newline-after-import': 'error',
    semi: ['error', 'always'],
    'no-useless-constructor': 'off',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
    ],

    // @typescript-eslint/recommended overrides
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      files: '**/*.ts',
      rules: {
        // Can't overload function exports with this enabled
        'import/export': 'error',

        // https://github.com/eslint/typescript-eslint-parser/issues/445
        // https://github.com/eslint/typescript-eslint-parser/issues/457
        // enabled in tslint instead
        'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'error',

        // https://github.com/typescript-eslint/typescript-eslint/issues/1220
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',

        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
            },
            singleline: {
              delimiter: 'semi',
            },
          },
        ],
      },
    },
  ],
};
