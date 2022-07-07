import { forwardRef, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bjmIcon from 'src/assets/icons/bjm.svg';
import routes from 'src/routes';

const MainNavbar = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentPath, setCurrentPath] = useState<string>('/');
  // Setting the current path of the browser must be in useEffect, as this is browser specific behaviour
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  });

  /**
   * Generates the href for a nav link.
   * This is to handle having resource param in base path.
   * e.g: If example.com/base is the base path of the webpage (like in github pages), then
   * the href for another page should be example.com/base/otherPage.
   */
  function generateHref(linkPath: string) {
    // no resource param in base path
    if (currentPath === '/') {
      return linkPath;
    }
    const indexOfLastSlash = currentPath.lastIndexOf('/');
    return currentPath.slice(0, indexOfLastSlash) + linkPath;
  }
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
                <Nav.Link
                  key={page}
                  className="px-2"
                  href={generateHref(routes[page].path)}
                >
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
