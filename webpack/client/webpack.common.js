const { merge } = require('webpack-merge');
const HtmlMpaWebpackPlugin = require('../html-mpa-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('../webpack.common.js');
const { rootDir } = require('../constants.js');
const path = require('path');

/**
 * Common webpacks settings when bundling client code.
 */
module.exports = merge(common, {
  plugins: [
    new HtmlMpaWebpackPlugin({
      pagesDir: path.resolve(rootDir, 'src/pages'),
      serverHtmlDir: path.resolve(rootDir, 'renderedHtml'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(rootDir, 'src/assets/icons/bjm.svg'),
      prefix: 'static/assets/',
      favicons: {
        background: '#0b3948',
        theme_color: '#0b3948',
      },
    }),
    // for analyzing bundle size
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
});
