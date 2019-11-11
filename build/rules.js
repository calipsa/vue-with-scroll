const cssLoaders = require('./utils/cssLoaders')
const styleLoaders = require('./utils/styleLoaders')

module.exports = [
  {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.vue$/,
    use: {
      loader: 'vue-loader',
      options: {
        loaders: cssLoaders({
          extract: true,
          modules: true,
        }),
        transformToRequire: {
          video: 'src',
          source: 'src',
          img: 'src',
          image: 'xlink:href',
        },
      },
    },
    exclude: /node_modules/,
  },
  ...styleLoaders({
    extract: true,
  }),
]
