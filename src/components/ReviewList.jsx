import Sorters from "./Sorters";
import ReviewCard from "./ReviewCard";
import Loader from "./Loader";

import * as api from "../api";

import { useState, useEffect } from "react";

const ReviewList = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");

  useEffect(() => {
    api.fetchSortedReviews(selectedSortBy, selectedOrder).then(({ data }) => {
      setAllReviews(data);
      setIsLoading(false);
    });
  }, [selectedSortBy, selectedOrder]);

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );

  return (
    <div>
      <div className="cards-list">
        <Sorters
          selectedSortBy={selectedSortBy}
          setSelectedSortBy={setSelectedSortBy}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
        {allReviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default ReviewList;
