import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = ({ user, setIsMenuOpen, isMenuOpen }) => {
  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <div className="box">
        <span>
          <a id="mobile-nav-button" onClick={openMenu} className="mobile-only">
            <div class="hamburger-menu"></div>
            <div class="hamburger-menu"></div>
            <div class="hamburger-menu"></div>
          </a>
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
