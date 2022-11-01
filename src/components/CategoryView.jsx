import ReviewCard from "./ReviewCard";
import CategoryBar from "./CategoryBar";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CategoryView = ({ allCategories }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setCurrentCategory(category);
    api.fetchReviewsByCategory(currentCategory).then(({ data }) => {
      setCategoryReviews(data);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div className="reviews">
      <CategoryBar
        allCategories={allCategories}
        currentCategory={currentCategory}
      />
      {categoryReviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </div>
  );
};

export default CategoryView;
