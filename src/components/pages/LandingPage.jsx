import UserButton from "../UserButton";

const LandingPage = ({ users, setUser }) => {
  return (
    <main id="landing-page">
      <h1 className="header-title">Board Game Reviews</h1>
      <div id="landing-welcome">
        <h2>Welcome back!</h2>
        <br />
        <h3>Choose a user below to continue...</h3>
      </div>
      <div id="user-selection">
        {users.map((user) => {
          return <UserButton user={user} setUser={setUser} />;
        })}
      </div>
    </main>
  );
};

export default LandingPage;
