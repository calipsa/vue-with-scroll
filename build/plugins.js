const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = [
  new VueLoaderPlugin(),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),
]
