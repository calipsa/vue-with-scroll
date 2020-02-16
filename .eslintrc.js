module.exports = {
  root: true,

  extends: [
    '@calipsa/eslint-config-typescript',
  ],

  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.config.js',
      },
    },
  },
}
