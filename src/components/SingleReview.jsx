import * as api from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BackButton from "../components/BackButton";
import CategoryBar from "./CategoryBar";
import CommentContainer from "./CommentContainer";
import VoteContainer from "./VoteContainer";

const SingleReview = ({ allCategories, users, user }) => {
  const [review, setReview] = useState({});
  const { review_id, category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [userVotesStr, setUserVotesStr] = useState("");
  const [buttonStyling, setButtonStyling] = useState(["", ""]);

  useEffect(() => {
    const previousVote = userVotesStr.split("")[review.review_id - 1];

    if (previousVote === "1") {
      setButtonStyling(["", ""]);
    } else if (previousVote === "0") {
      setButtonStyling(["", "downvote"]);
    } else if (previousVote === "2") {
      setButtonStyling(["upvote", ""]);
    }
    console.log("initialise colouring");
  }, []);

  useEffect(() => {
    api
      .fetchReviewById(review_id)
      .then(({ data: { review } }) => {
        console.log("useeffect array rerendering!");
        setReview(review);
        setIsLoading(false);
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
    <div className="review-page">
      <div className="review-box">
        <CategoryBar currentCategory={category} allCategories={allCategories} />
        <BackButton category={category} />
        <VoteContainer
          review={review}
          user={user}
          userVotesStr={userVotesStr}
          buttonStyling={buttonStyling}
          setButtonStyling={setButtonStyling}
        />
        <h2>{review.title}</h2>
        <p>{`Posted by ${review.owner} on ${review.created_at.substring(
          0,
          10
        )}`}</p>
        <img
          src={`${review.review_img_url}`}
          alt={`${review.title}`}
          className="review-img"
        />
        <p className="review-text">{review.review_body}</p>
      </div>
      <CommentContainer
        review_id={review.review_id}
        review_author={review.owner}
        users={users}
      />
    </div>
  );
};

export default SingleReview;
