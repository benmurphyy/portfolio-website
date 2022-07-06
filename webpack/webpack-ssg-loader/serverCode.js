const serverImports = `import fs from 'fs-extra';
import ReactDOMServer from 'react-dom/server';
// contains the basic html template to use for all pages
import htmlTemplate from 'public/index.html';
`;

/**
 * Returns the code that would render a React component and put that rendered component in
 * a file at renderedHtmlFilePath.
 */
function getServerCode(renderedHtmlFilePath) {
  return `
    const renderedAppHtml = ReactDOMServer.renderToString(<Root/>);
    const completeHtml = htmlTemplate.replace(
      // placeholder comment in html template to replace with rendered htmk
      '<!-- React Render String -->',
      renderedAppHtml);
    fs.outputFile('${renderedHtmlFilePath}', completeHtml, function (err) {
      if (err) throw err;
      console.log('Rendered and saved ' + '${renderedHtmlFilePath}');
  });`;
}

module.exports = { serverImports, getServerCode };
