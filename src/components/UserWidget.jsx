import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const UserWidget = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser({
      username: "jessjelly",
      name: "Jess Jelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    });
  }, []);
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
