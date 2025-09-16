import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "/icons/chess-queen-light-full.svg";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
  expanded={expanded}
  onToggle={(isExpanded) => setExpanded(isExpanded)}
  expand="md"
  bg="light"
  variant="light"
  fixed="top"
  className="shadow-sm"
>

      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
          <span className="ms-2">Sara Vargas</span>
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="responsive-navbar-nav" role="navigation">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
