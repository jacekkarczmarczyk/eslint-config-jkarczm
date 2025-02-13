import languageOptions from './languageOptions.mjs'
import plugins from './plugins.mjs'

export default [{
  name: "jkarczm:main",
  // extends: ['./index.js'],
  languageOptions,
  plugins,
  files: ['*.mjs'],
  rules: {
    semi: "error", // do testów
  }
}];
