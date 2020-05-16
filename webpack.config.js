const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  devServer: {
    overlay: true,
    compress: true,
    port: 7500
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      { 
        test: /\.(ts|js)x?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      template: 'src/index.html'
    })
  ]
};