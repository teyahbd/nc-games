import ReviewCard from "./ReviewCard";
import CategoryBar from "./CategoryBar";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CategoryView = ({ allCategories, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [userVotesStr, setUserVotesStr] = useState("");
  const [localUserVotesStr, setLocalUserVotesStr] = useState("");
  const { category } = useParams();

  useEffect(() => {
    api
      .fetchReviewsByCategory(category)
      .then(({ data }) => {
        console.log("useeffect array rerendering!");
        setCategoryReviews(data);
      })
      .then(() => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        // add a specific fetch user by username in backend to replace this later & make custom hook
        console.log("fetched user vote inc!");
        setUserVotesStr(users[5].vote_increments);
        setLocalUserVotesStr(users[5].vote_increments);
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
            userVotesStr={userVotesStr}
            localUserVotesStr={localUserVotesStr}
            setLocalUserVotesStr={setLocalUserVotesStr}
          />
        );
      })}
    </div>
  );
};

export default CategoryView;
