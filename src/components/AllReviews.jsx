import { Spinner } from "react-bootstrap";
import { useState, useEffect, useParams } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";

const AllReviews = ({ user }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatedVoteInc, setUpdatedVoteInc] = useState(user.vote_increments);

  useEffect(() => {
    api
      .fetchReviews()
      .then(({ data }) => {
        setAllReviews(data);
      })
      .then((data) => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        setUpdatedVoteInc(users[5].vote_increments);
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
            updatedVoteInc={updatedVoteInc}
          />
        );
      })}
    </div>
  );
};

export default AllReviews;
