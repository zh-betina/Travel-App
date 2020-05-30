const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/app.js',
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
    devServer: {
      port: 8081,
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: true,
        verbose: true,
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
      }),
      new HtmlWebPackPlugin({
        template: './src/client/views/index.html',
        filename: './index.html',
        minify: false
      }),
      new HtmlWebPackPlugin({
        template: './src/client/views/about.html',
        filename: './about.html',
        minify: false
      }),
      new HtmlWebPackPlugin({
        template: './src/client/views/mytrips.html',
        filename: './mytrips.html',
        minify: false
      }),
      new HtmlWebPackPlugin({
        template: './src/client/views/guide.html',
        filename: './guide.html',
        minify: false
      })
    ]
}
