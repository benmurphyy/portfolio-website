/**
 * This script calls all the page bundle files in serverBuild folder to render their HTML into renderedHtml folder.
 */
const fs = require('fs');
const path = require('path');

// Loads an array of all the page names
const pages = fs
  .readdirSync(path.resolve('./src/pages'), { withFileTypes: true })
  .filter((file) => file.isDirectory)
  .map((file) => file.name);

// for each page, run its bundle
pages.forEach((pageName) => {
  require(path.resolve(`./serverBuild/${pageName}.js`));
});
