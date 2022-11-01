import * as api from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BackButton from "../components/BackButton";
import CategoryBar from "./CategoryBar";

const SingleReview = ({ allCategories }) => {
  const [review, setReview] = useState({});
  const { review_id, category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviewById(review_id).then(({ data: { review } }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner animation="border" />;
  return (
    <div>
      <CategoryBar currentCategory={category} allCategories={allCategories} />
      <BackButton category={category} />
      <h2>{review.title}</h2>
      <img
        src={`${review.review_img_url}`}
        height="30%"
        width="30%"
        alt={`${review.title}`}
      />
      <p>{review.review_body}</p>
    </div>
  );
};

export default SingleReview;
