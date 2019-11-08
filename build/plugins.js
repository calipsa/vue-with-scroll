const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { compact } = require('lodash')

module.exports = compact([
  new VueLoaderPlugin(),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  new MiniCssExtractPlugin({
    chunkFilename: '[id].[contenthash].css',
  }),
])
