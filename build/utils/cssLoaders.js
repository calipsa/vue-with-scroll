const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { compact } = require('lodash')

const modulesOptions = {
  localIdentName: '[name]__[local]___[hash:base64:5]',
}

const getLoaderGenerator = (options) =>
  (loader, loaderOptions) =>
    compact([
      // Extract CSS when that option is specified
      // (which is the case during production build)
      options.extract ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: options.modules && modulesOptions,
          sourceMap: options.sourceMap,
        },
      },
      loader && {
        loader: `${loader}-loader`,
        options: {
          ...loaderOptions,
          sourceMap: options.sourceMap,
        },
      },
    ])

module.exports = (options = {}) => {
  // generate loader string to be used with extract text plugin
  const generateLoaders = getLoaderGenerator(options)

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders('postcss'),
    // less: generateLoaders('less'),
    // scss: generateLoaders('sass'),
  }
}

// /storage/886C-1C15
