import 'src/styles/index.scss';

import fs from 'fs';
import htmlTemplate from 'public/index.html';
import ReactDOMServer from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import App from 'src/main';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const renderedAppHtml = ReactDOMServer.renderToString(
  <MemoryRouter>
    <App></App>
  </MemoryRouter>
);

const completeHtml = htmlTemplate.replace(
  '<!-- React Render String -->',
  renderedAppHtml
);

fs.writeFile('./serverBuild/index.html', completeHtml, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
