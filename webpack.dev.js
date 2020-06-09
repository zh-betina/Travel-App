const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/app.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/dist',
    port: 8080,
    proxy: {
    '/about': {
      target: 'http://localhost:8081/',
      secure: false
    },
    '/trips': {
      target: 'http://localhost:8081/',
      secure: false
    },
    '/guide': {
      target: 'http://localhost:8081/',
      secure: false
    }
  }
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
        test: /\.(png|jpe?g|gif)$/i,
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
      filename: './index.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/client/views/mytrips.html',
      filename: './mytrips.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/client/views/guide.html',
      filename: './guide.html'
    })
  ]
}
