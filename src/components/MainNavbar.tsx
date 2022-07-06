import { forwardRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bjmIcon from 'src/assets/icons/bjm.svg';
import routes from 'src/routes';

const MainNavbar = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Navbar
      ref={ref}
      collapseOnSelect
      className=""
      bg="primary"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand href="/" className="px-2 rounded">
        <img src={bjmIcon} alt="ben murphy brand icon" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end">
          {Object.keys(routes).map((page) =>
            // only home page does not get a link
            page !== 'home' ? (
              <Nav.Item key={page} className="d-flex justify-content-end">
                <Nav.Link key={page} className="px-2" href={routes[page].path}>
                  {routes[page].title}
                </Nav.Link>
              </Nav.Item>
            ) : null
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

MainNavbar.displayName = 'Navigator';

export default MainNavbar;
