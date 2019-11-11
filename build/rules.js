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
    },
    exclude: /node_modules/,
  },
]
