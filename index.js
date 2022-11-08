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
    project: 'tsconfig.json',
  },
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'html',
    'node',
    'unused-imports',
    'sort-destructure-keys',
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
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],
    'arrow-body-style': 'off',
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    }],
    'multiline-ternary': 'off',
    'func-call-spacing': 'off',

    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // @typescript-eslint/recommended overrides
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
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
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/array-type': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': 'off',
    /*
    [
      "error",
      2,
      {
        "ignoredNodes": [
          "PropertyDefinition[decorators]",
          "TSUnionType",
          "TSTypeParameterInstantiation",
          "TSIntersectionType"
        ]
      }
    ],
    */
    '@typescript-eslint/promise-function-async': 'off', // maybe some day
    '@typescript-eslint/return-await': 'off', // maybe some day
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // needs a fix in jetbrains
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  },
  overrides: [
    {
      files: '**/*.ts',
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'error',

        // '@typescript-eslint/strict-boolean-expressions': 'error', // TODO
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/func-call-spacing': ['error'],

        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],

        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      },
    },
  ],
};
