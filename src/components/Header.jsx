import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand id="navbar-brand">NC Games</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Categories">
              <NavDropdown.Item>Category 1</NavDropdown.Item>
            </NavDropdown>
            <UserWidget />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
