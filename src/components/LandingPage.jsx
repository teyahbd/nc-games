import { Link } from "react-router-dom";

const LandingPage = ({ user }) => {
  return (
    <main id="landing-page">
      <h1 className="header-title">Board Game Reviews</h1>
      <div id="landing-user-widget">
        <h2>Welcome back</h2>
        <h2>{`${user.name.split(" ")[0]}`}!</h2>
        <img src={`${user.avatar_url}`} alt="user avatar"></img>
      </div>
      <Link id="continue-button" to={"/home"}>
        <h3>CONTINUE</h3>
      </Link>
    </main>
  );
};

export default LandingPage;
