const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.PORT || 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: port,
    historyApiFallback: {
      // adds file extension .html for all requests with no file extension
      // this is essential for devServer to serve MPA pages correctly
      rewrites: [
        {
          from: /\/[a-z0-9_]*/i,
          to: (context) => context.parsedUrl.pathname + '.html',
        },
      ],
    },
  },
});
