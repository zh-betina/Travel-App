const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/app.js',
  devtool: 'inline-source-map',
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
    new HtmlWebPackPlugin({
      template: './src/client/views/about.html',
      filename: './about.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'})
  ]
}
