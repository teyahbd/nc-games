import * as api from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import CommentContainer from "./CommentContainer";
import Loader from "./Loader";

const SingleReview = ({ allCategories, users }) => {
  const [review, setReview] = useState({});
  const { review_id, category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviewById(review_id).then(({ data: { review } }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );
  return (
    <div className="review-page">
      <BackButton category={category} />
      <br />
      <div className="review-box">
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
