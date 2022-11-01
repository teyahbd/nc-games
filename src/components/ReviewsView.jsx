import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";

const ReviewsView = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviews().then(({ data }) => {
      setAllReviews(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div className="reviews">
      {allReviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </div>
  );
};

export default ReviewsView;
