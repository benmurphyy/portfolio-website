const clientImports = "import ReactDOM from 'react-dom/client';";

const clientCode =
  "ReactDOM.hydrateRoot(document.getElementById('root'), <Root/>);";

module.exports = { clientImports, clientCode };
