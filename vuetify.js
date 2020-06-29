module.exports = {
  extends: ['./vue'],
  plugins: ['vuetify'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',

    'vuetify/no-deprecated-classes': 'error',
  },
};
