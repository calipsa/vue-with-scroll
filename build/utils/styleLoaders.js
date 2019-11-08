const cssLoaders = require('./cssLoaders')

// Generate loaders for standalone style files (outside of .vue)
module.exports = (options) =>
  Object.entries(cssLoaders(options))
    .map(([extension, loader]) => ({
      test: new RegExp(`\\.${extension}$`),
      use: loader,
    }))
