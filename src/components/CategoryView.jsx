import ReviewCard from "./ReviewCard";
import CategoryWidget from "./CategoryWidget";
import Loader from "./Loader";
import Header from "./header/Header";
import Sidebar from "./nav/Sidebar.jsx";
import Dropdown from "./nav/Dropdown";
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

  // make this a custom hook
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1000;

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );

  if (isMobile)
    return (
      <div className="page">
        <Header user={user} />
        <div className="main-page">
          <div className="reviews">
            <CategoryWidget
              allCategories={allCategories}
              currentCategory={category}
            />
            <Dropdown allCategories={allCategories} />
            {categoryReviews.map((review) => {
              return <ReviewCard key={review.review_id} review={review} />;
            })}
          </div>
        </div>
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
