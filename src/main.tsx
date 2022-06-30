import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { HashRouter } from 'react-router-dom';
import Navigator from 'src/components/MainNavbar';
import Routes from 'src/routes';

//all the images we want to preload
/**
 * This is the main react component. Take note that we need to use HashRouter here instead of BrowserRouter as
 * this website was made for github pages, and routing in github pages required the hashrouter to ensure it worked properly.
 */

export default function App() {
  const mainNavbarRef = useRef<HTMLDivElement>(null);
  return (
    <HashRouter basename="/">
      <Container fluid className="App p-0 fill h-100">
        <Navigator ref={mainNavbarRef}></Navigator>
        <Routes mainNavbarRef={mainNavbarRef} />
      </Container>
    </HashRouter>
  );
}
