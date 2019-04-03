const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(css|less)$/,
        loaders: [
          'style-loader',
          'css-loader?localIdentName=[name]-[local]-[hash:base64:4]',
          {
            loader: '@skbkontur/typed-css-modules-loader',
            options: {
              noEmit: false,
            },
          },
        ],
      },
      { test: /\.(woff|woff2|eot)$/, loader: 'file-loader' },
    ]
  }
}
