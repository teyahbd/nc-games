const UserWidget = ({ user }) => {
  return (
    <div id="user-widget">
      <img src={`${user.avatar_url}`} alt="user avatar" id="user-avatar" />
      <p id="user-username">{user.username}</p>
    </div>
  );
};

export default UserWidget;
