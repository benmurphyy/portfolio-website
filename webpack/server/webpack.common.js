const { merge } = require('webpack-merge');
const common = require('../webpack.common.js');
const path = require('path');
const { rootDir } = require('../constants.js');

module.exports = merge(common, {
  target: 'node',
  output: {
    path: path.resolve(rootDir, 'serverBuild'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
});
