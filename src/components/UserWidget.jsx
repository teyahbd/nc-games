const UserWidget = ({ user }) => {
  return (
    <div id="user-widget">
      <img src={`${user.avatar_url}`} alt="user avatar" id="user-avatar" />
      <div id="user-widget-text">
        <p id="user-widget-greeting">Hello</p>
        <p id="user-widget-username">{`${user.username}!`}</p>
      </div>
    </div>
  );
};

export default UserWidget;
