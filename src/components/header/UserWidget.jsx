import { Link } from "react-router-dom";

const UserWidget = ({ user }) => {
  return (
    <Link to="/" id="user-link">
      <div id="user-widget">
        <img src={`${user.avatar_url}`} alt="user avatar" id="user-avatar" />
        <div id="user-widget-text" className="web-only">
          <p className="web-only">{`${user.name}`}</p>
          <p
            id="user-widget-username"
            className="web-only"
          >{`${user.username}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserWidget;
