import React, { forwardRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router';
import { ReactComponent as BjmIcon } from 'assets/icons/bjm.svg';

const pages = require("../data/pages.json");

const Navigator = forwardRef((props, ref) => {
    const navigate = useNavigate();
    return (
        <Navbar ref={ref} collapseOnSelect className="" bg="primary" variant="dark" expand="md">
            <Navbar.Brand href="/" className="px-2 rounded">
                <BjmIcon />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav expand="md" className="justify-content-end" onSelect={eventKey => navigate(eventKey)}>
                    {pages.map(page =>
                        <Nav.Item key={page.name} className="d-flex justify-content-end">
                            <Nav.Link key={page.name} className="px-2" eventKey={page.path}>{page.name}</Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default Navigator;