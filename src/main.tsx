import { useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigator from 'src/components/Navigator';
import Routes from 'src/routes';
//all the images we want to preload
/**
 * This is the main react component. Take note that we need to use HashRouter here instead of BrowserRouter as
 * this website was made for github pages, and routing in github pages required the hashrouter to ensure it worked properly.
 */

export default function App() {
  const navigatorRef = useRef<HTMLDivElement>(null);
  return (
    <HashRouter basename="/">
      <Container fluid className="App p-0 fill h-100">
        <Navigator ref={navigatorRef}></Navigator>
        <Routes navigator={navigatorRef} />
      </Container>
    </HashRouter>
  );
}
