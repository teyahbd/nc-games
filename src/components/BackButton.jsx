import { Link } from "react-router-dom";

const BackButton = ({ category }) => {
  return (
    <Link to={`/${category}`}>
      <button>Back</button>
    </Link>
  );
};

export default BackButton;
