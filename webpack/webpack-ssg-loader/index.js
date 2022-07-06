const { validate } = require('schema-utils');
const { clientImports, clientCode } = require('./clientCode.js');
const { serverImports, getServerCode } = require('./serverCode.js');

// for validating the optins object provided to the loader.
const optionsSchema = {
  type: 'object',
  properties: {
    pagesDir: {
      type: 'string',
    },
    renderedHtmlFileDir: {
      type: 'string',
    },
  },
};

function webpackSsgLoader(source) {
  validate(optionsSchema, this.getOptions(), { name: 'WebpackSsgLoader' });
  const options = this.getOptions();
  // path of the current resource being loaded
  const resourcePath = this.resourcePath;
  // default pagesRegex for matching index file of a page
  let pagesRegex = /src\/pages\/[a-z_A-Z]*\/index/i;
  if (options.pagesDir) {
    // if pageDir is provided, generate a new regex
    pagesRegex = new RegExp(options.pagesDir + '/[a-z_A-Z]*/index');
  }
  // if the file being loaded is not a page index, then do nothing to it
  if (!pagesRegex.test(resourcePath)) {
    return source;
  }
  if (this.target === 'node') {
    output = serverImports.concat(
      source,
      getServerCode(
        options.renderedHtmlFileDir +
          resourcePath.replace(/\/index\..*/, '').replace(/^.*[\\\/]/, '/') +
          '.html'
      )
    );
  } else {
    // this.target is 'web'
    output = clientImports.concat(source, clientCode);
  }
  return output;
}

module.exports = webpackSsgLoader;
