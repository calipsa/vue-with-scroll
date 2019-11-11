const path = require('path')

const nodeExternals = require('webpack-node-externals')

const rootDir = process.cwd()

const rules = require('./rules')
const plugins = require('./plugins')

module.exports = {
  mode: 'production',

  // target: 'node',

  entry: './src',

  output: {
    // specify your output directory...
    path: path.resolve(rootDir, './dist'),
    // and filename
    filename: 'index.js',
  },

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.vue',
    ],
    modules: [
      path.resolve(rootDir, 'src'),
      // 'node_modules',
    ],
  },

  externals: [nodeExternals()],

  devtool: 'source-map',

  module: {
    rules,
  },

  plugins,
}
