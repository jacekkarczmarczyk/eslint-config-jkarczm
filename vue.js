module.exports = {
  extends: [
    './index',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['vue'],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'vue/prop-name-casing': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: true,
    }],
    // 'vue/no-static-inline-styles': 'off', // wip
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/static-class-names-order': 'error',
    'vue/require-name-property': 'error',
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true,
    }],
    'vue/no-reserved-component-names': 'error',
    'vue/valid-v-slot': ['error', {
      allowModifiers: true,
    }],
    'vue/custom-event-name-casing': ['error', {
      ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
    }],

    // @typescript-eslint/recommended overrides
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
