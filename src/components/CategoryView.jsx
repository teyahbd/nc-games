import ReviewCard from "./ReviewCard";
import CategoryBar from "./CategoryBar";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CategoryView = ({ allCategories, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [updatedVoteInc, setUpdatedVoteInc] = useState(user.vote_increments);
  const { category } = useParams();

  useEffect(() => {
    api
      .fetchReviewsByCategory(category)
      .then(({ data }) => {
        setCategoryReviews(data);
        setIsLoading(false);
      })
      .then((data) => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        setUpdatedVoteInc(users[5].vote_increments);
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div className="reviews">
      <CategoryBar allCategories={allCategories} currentCategory={category} />
      {categoryReviews.map((review) => {
        return (
          <ReviewCard
            key={review.review_id}
            review={review}
            user={user}
            updatedVoteInc={updatedVoteInc}
          />
        );
      })}
    </div>
  );
};

export default CategoryView;
