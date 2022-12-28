import { useEffect, useState } from "react";

import ReviewCard from "../ReviewCard";
import CategoryWidget from "../CategoryWidget";
import Loader from "../Loader";
import Sorters from "../Sorters";

import * as api from "../../api";

const CategoryReviews = ({ category, allCategories }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");

  useEffect(() => {
    api
      .fetchSortedReviewsByCategory(category, selectedSortBy, selectedOrder)
      .then(({ data }) => {
        setCategoryReviews(data);
        setIsLoading(false);
      });
  }, [category, selectedSortBy, selectedOrder]);

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );

  return (
    <div>
      <CategoryWidget
        currentCategory={category}
        allCategories={allCategories}
      />
      <div className="cards-list">
        <Sorters
          selectedSortBy={selectedSortBy}
          setSelectedSortBy={setSelectedSortBy}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
        {categoryReviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default CategoryReviews;
