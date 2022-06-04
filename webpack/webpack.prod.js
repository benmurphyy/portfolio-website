const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // only use hashing for production to minimise dev build time
    filename: '[name].[contenthash].js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
