import { Link } from "react-router-dom";

const BackButton = ({ category }) => {
  let categoryTitle = "";
  category.split("-").forEach((word) => {
    let capitalisedWord = word[0].toUpperCase() + word.substring(1) + " ";
    categoryTitle += capitalisedWord;
  });
  return (
    <Link to={`/${category}`}>
      <button className="back-button">{`< Back to ${categoryTitle}`}</button>
    </Link>
  );
};

export default BackButton;
