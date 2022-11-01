import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = ({ allCategories }) => {
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
              {allCategories.map((category) => {
                return (
                  <NavDropdown.Item
                    key={`${category.slug}`}
                    as={Link}
                    to={`${category.slug}`}
                    className="dropdown-text"
                  >
                    {`${category.slug.replace(/-/g, " ")}`}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <UserWidget />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
