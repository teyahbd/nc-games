import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

const Header = ({ user, setIsMenuOpen, isMenuOpen }) => {
  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <div id="heading">
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
      </div>
      <UserWidget user={user} />
    </header>
  );
};

export default Header;
