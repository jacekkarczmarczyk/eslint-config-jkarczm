module.exports = {
  extends: ['./vue.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: 'tsconfig.json',
    parser: {
      ts: '@typescript-eslint/parser',
      js: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
};
