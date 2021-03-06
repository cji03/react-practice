const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const moduleCSSLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[name]__[local]--[hash:base64:5]',
    },
  },
};

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.scss$/,
      loader: ['style-loader', moduleCSSLoader, 'sass-loader'],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]',
      },
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src/'),
    },
  },
  devServer: {
    contentBase: './build',
    port: 8081,
    inline: true,
    hot: true,
  },
  // externals: [nodeExternals()],
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
