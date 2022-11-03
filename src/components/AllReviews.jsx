import { Spinner } from "react-bootstrap";
import { useState, useEffect, useParams } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";

const AllReviews = () => {
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
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </div>
  );
};

export default AllReviews;
