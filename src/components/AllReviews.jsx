import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";

const AllReviews = ({ user }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userVotesStr, setUserVotesStr] = useState("");

  useEffect(() => {
    api
      .fetchReviews()
      .then(({ data }) => {
        console.log("useeffect array rerendering!");
        setAllReviews(data);
      })
      .then(() => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        // add a specific fetch user by username in backend to replace this later & make custom hook
        console.log("fetched user vote inc!");
        setUserVotesStr(users[5].vote_increments);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div className="reviews">
      {allReviews.map((review) => {
        return (
          <ReviewCard
            key={review.review_id}
            review={review}
            user={user}
            userVotesStr={userVotesStr}
          />
        );
      })}
    </div>
  );
};

export default AllReviews;
