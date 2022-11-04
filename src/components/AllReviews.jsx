import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";

const AllReviews = ({ user }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userVotesStr, setUserVotesStr] = useState("");
  const [localUserVotesStr, setLocalUserVotesStr] = useState("");

  useEffect(() => {
    api
      .fetchReviews()
      .then(({ data }) => {
        setAllReviews(data);
      })
      .then(() => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        // add a specific fetch user by username in backend to replace this later & make custom hook
        const myUser = users.filter((user) => user.username === "jessjelly");
        setUserVotesStr(myUser[0].vote_increments);
        setLocalUserVotesStr(myUser[0].vote_increments);
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
            localUserVotesStr={localUserVotesStr}
            setLocalUserVotesStr={setLocalUserVotesStr}
          />
        );
      })}
    </div>
  );
};

export default AllReviews;
