/** @type {import('eslint').FlatConfig} */
const { rules: reactRules } = require('eslint-plugin-react');

module.exports = [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      // Configuración correcta para boolean-prop-naming
      'react/boolean-prop-naming': ['error', {
        "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        "message": "Prop name `{{propName}}` doesn’t match rule `{{pattern}}`"
      }],
      // Otras reglas de React
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
