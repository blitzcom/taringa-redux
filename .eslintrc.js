module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.css'],
      },
    },
  },
  plugins: ['jest'],
  env: {
    'browser': true,
    'es6': true,
    'amd': true,
    'node': true,
    'jest/globals': true,
  },
  globals: {
    def: 'readonly',
    $: 'readonly',
    context: 'readonly',
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'no-alert': ['error'],
    'no-console': ['error'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: ['*-test.js'],
      rules: {
        'no-undef': 0,
      },
    },
  ],
};
