const UserWidget = ({ user }) => {
  return (
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
  );
};

export default UserWidget;
