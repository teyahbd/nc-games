import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = ({ user }) => {
  let closed = true;
  function showDropdown() {}

  return (
    <header>
      <div className="box">
        <span>
          <button id="category-button" onClick={showDropdown()}>
            <h3>CATEGORIES</h3>
            <i className="down-arrow"></i>
          </button>
        </span>
      </div>
      <div className="box">
        <span>
          <Link to="/home" style={{ textDecoration: "none" }}>
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
