import html from 'eslint-plugin-html'
import node from 'eslint-plugin-node'
import unusedImports from 'eslint-plugin-unused-imports'
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'
import typescript from '@typescript-eslint/eslint-plugin'
import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'

export default {
  html,
  node,
  unusedImports,
  sortDestructureKeys,
  '@typescript-eslint': typescript,
  vue,
  vuetify,
};
