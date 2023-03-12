module.exports = {
  extends: [
    './index',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['vue'],
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: require.resolve('@typescript-eslint/parser'),
    project: 'tsconfig.json',
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/eqeqeq': ['error', 'smart'],
    'vue/require-default-prop': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-undef-properties': 'error',
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
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true,
    }],
    'vue/no-reserved-component-names': 'error',
    'vue/v-on-function-call': 'error',
    'vue/custom-event-name-casing': ['error', {
      ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
    }],
    'vue/no-unused-refs': 'off', // https://github.com/vuejs/eslint-plugin-vue/issues/1504
    'vue/no-unused-properties': ['error', {
      groups: ['props', 'setup'], // 'props'
      deepData: false,
      ignorePublicMembers: true,
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],

    // @typescript-eslint/recommended overrides
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [{
    // Declare <script setup> compiler hints as globals so eslint is happy
    files: ['./**/*.vue'],
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly',
    },
  }],
};
