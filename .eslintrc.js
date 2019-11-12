module.exports = {
  root: true,

  extends: [
    '@calipsa/eslint-config-vue',
  ],

  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.config.js',
      },
    },
  },
}
