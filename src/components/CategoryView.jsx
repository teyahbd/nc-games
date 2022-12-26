import ReviewCard from "./ReviewCard";
import CategoryWidget from "./CategoryWidget";
import Loader from "./Loader";
import Header from "./header/Header";
import Sidebar from "./Sidebar.jsx";
import { useEffect, useState } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";

const CategoryView = ({ allCategories, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    api.fetchReviewsByCategory(category).then(({ data }) => {
      setCategoryReviews(data);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );

  return (
    <div className="page">
      <Header user={user} />
      <div className="main-page">
        <Sidebar allCategories={allCategories} />
        <div className="reviews">
          <CategoryWidget
            allCategories={allCategories}
            currentCategory={category}
          />
          {categoryReviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
