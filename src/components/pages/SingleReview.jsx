import { useEffect, useState } from "react";

import BackButton from "../BackButton";
import CommentContainer from "../CommentContainer";
import Loader from "../Loader";

import * as api from "../../api";

const SingleReview = ({ users, category, review_id, user }) => {
  const [review, setReview] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [postedDate, setPostedDate] = useState([0, 0, 0]);

  useEffect(() => {
    api.fetchReviewById(review_id).then(({ data: { review } }) => {
      setReview(review);
      setIsLoading(false);
      setPostedDate([
        review.created_at.substring(8, 10),
        review.created_at.substring(5, 7),
        review.created_at.substring(0, 4),
      ]);
    });
  }, []);

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );

  return (
    <main className="review-page">
      <div className="review-box">
        <div className="review-header">
          <BackButton category={category} />
          <h2>{review.title}</h2>
        </div>
        <h3>{`Posted by ${review.owner} on ${postedDate[0]}/${postedDate[1]}/${postedDate[2]}`}</h3>
        <div className="review-container">
          <img
            src={`${review.review_img_url}`}
            alt={`${review.title}`}
            className="review-img"
          />
          <p className="review-text">{review.review_body}</p>
        </div>
      </div>
      <CommentContainer
        review_id={review.review_id}
        review_author={review.owner}
        users={users}
        user={user}
      />
    </main>
  );
};

export default SingleReview;
