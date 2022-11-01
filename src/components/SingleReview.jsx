import * as api from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BackButton from "../components/BackButton";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviewById(review_id).then(({ data: { review } }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);
  console.log(review);

  if (isLoading) return <Spinner animation="border" />;
  return (
    <div>
      <BackButton category={review.category} />
      <h2>{review.title}</h2>
      <img src={`${review.review_img_url}`} height="30%" width="30%" />
      <p>{review.review_body}</p>
    </div>
  );
};

export default SingleReview;
