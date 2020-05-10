const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('HtmlWebPackPlugin');

module.exports = {
  mode: 'development',
  entry: './src/client/app.js',
  devServer: {
    contentBase: './dist',
    port: 8080
  },
  output: {
    libraryTarget: 'var',
    library: 'Client'
  },
  module: {
    rules: [
      {
        test: '/\.js$',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/client/views/about.html',
      filename: './about.html'
  ]
}
