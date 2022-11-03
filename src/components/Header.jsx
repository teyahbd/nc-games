import UserWidget from "./UserWidget";

const Header = ({ allCategories, user }) => {
  return (
    <div className="header">
      <div className="box">
        <span>Categories</span>
      </div>
      <div className="box">
        <span>
          <h1 className="header-title">NC Games</h1>
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
