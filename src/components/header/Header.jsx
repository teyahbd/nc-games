import { Link } from "react-router-dom";

import CategoryDropdown from "./CategoryDropdown";
import UserWidget from "./UserWidget";

const Header = ({ allCategories, user }) => {
  return (
    <header>
      <div className="box">
        <span>
          <CategoryDropdown allCategories={allCategories} />
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
    </header>
  );
};

export default Header;
