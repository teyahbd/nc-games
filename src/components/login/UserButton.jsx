import { Link } from "react-router-dom";

const UserButton = ({ user, setUser }) => {
  function selectUser() {
    setUser(user);
  }
  return (
    <Link
      to="/home"
      id={`${user.username}`}
      onClick={selectUser}
      className="landing-user-widget"
    >
      <img src={`${user.avatar_url}`} alt="user avatar"></img>
      <h2>{`${user.name.split(" ")[0].toUpperCase()}`}</h2>
      <h3>{`${user.username}`}</h3>
    </Link>
  );
};

export default UserButton;
