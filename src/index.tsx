import 'src/styles/index.scss';

import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from 'src/main';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <HashRouter basename="/">
    <App></App>
  </HashRouter>
);
