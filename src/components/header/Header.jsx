import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = ({ allCategories, user }) => {
  return (
    <div className="header">
      <div className="box">
        <span>
          {/* <NavDropdown title="Categories">
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
          </NavDropdown> */}
          CATEGORIES
        </span>
      </div>
      <div className="box">
        <span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 id="web-header" className="header-title">
              Board Game Reviews
            </h1>
            <h1 id="mobile-header" className="header-title">
              BG Reviews
            </h1>
          </Link>
          <p id="subheading" className="web-only">
            Your one stop shop for all things board games!
          </p>
        </span>
      </div>
      <div className="box">
        <span>
          <UserWidget user={user} />
        </span>
      </div>
    </div>
  );
};

export default Header;
