import * as api from "./api";

const Test = ({
  currentReviews,
  setCurrentReviews,
  currentCategory,
  setCurrentCategory,
}) => {
  api.fetchReviewsByCategory(currentCategory).then(({ data }) => {
    setCurrentReviews(data);
  });

  return (
    <div>
      {currentReviews.map((review) => {
        return <p>{review.title}</p>;
      })}
    </div>
  );
};

export default Test;
