const UserWidget = ({ user }) => {
  return (
    <div>
      <img
        src={`${user.avatar_url}`}
        alt="user avatar"
        width="30"
        height="30"
      />
      <p>{user.username}</p>
    </div>
  );
};

export default UserWidget;
