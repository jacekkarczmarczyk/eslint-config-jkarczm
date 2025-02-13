import parser from 'vue-eslint-parser';

export default {
  ecmaVersion: "latest",
  parser,
  parserOptions: {
    project: 'tsconfig.json',
    parser: {
      ts: '@typescript-eslint/parser',
      js: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
};
