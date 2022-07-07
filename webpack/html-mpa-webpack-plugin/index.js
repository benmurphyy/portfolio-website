const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * Reads the folder structure of src/pages directory to determine page names,
 * then uses those page names add HtmlWebpackPlugins for each of them,
 * so that each page, which has its own html template, will have the link to their bundle
 * injected into their html template.
 */
class HtmlMpaWebpackPlugin {
  constructor({ pagesDir, serverHtmlDir }) {
    // only load all the folder names in the page folder, files do not count as a new page
    this.pages = fs
      .readdirSync(pagesDir, { withFileTypes: true })
      .filter((file) => file.isDirectory)
      .map((file) => file.name);
    this.serverHtmlDir = serverHtmlDir;
  }

  apply(compiler) {
    // create and apply the HtmlWebpackPLugin for each page
    // minification of generated html must be turned off, to avoid React hydration mismatch errors
    this.pages.forEach((page) => {
      new HtmlWebpackPlugin({
        template: this.serverHtmlDir + '/' + page + '.html',
        filename: `${page === 'home' ? 'index' : page}.html`,
        chunks: [page],
        minify: false,
      }).apply(compiler);
    });
  }
}

module.exports = HtmlMpaWebpackPlugin;
