import { Link } from "react-router-dom";

const BackButton = ({ category }) => {
  return (
    <Link to={`/${category}`}>
      <button className="back-button">Back</button>
    </Link>
  );
};

export default BackButton;
