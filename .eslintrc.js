module.exports = {
  root: true,
  env: {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'global-require': 'off',
    'no-new': 0, // Intrusive when using Chart.js instances.
    'no-underscore-dangle': 0, // Chart.js uses underscore dangles (_) internally.
    'import/no-unresolved': 0, // False positives regarding imports that use aliases.
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
