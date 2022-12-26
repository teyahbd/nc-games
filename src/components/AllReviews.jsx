import { useState, useEffect, useParams } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";
import Loader from "./Loader";
import Header from "./header/Header";
import Sidebar from "./nav/Sidebar.jsx";
import Dropdown from "./nav/Dropdown";

const AllReviews = ({ user, allCategories }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(user);
  useEffect(() => {
    api.fetchReviews().then(({ data }) => {
      setAllReviews(data);
      setIsLoading(false);
    });
  }, []);

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
          <Dropdown allCategories={allCategories} />
          <div id="cards-list">
            {allReviews.map((review) => {
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
        <div id="cards-list">
          {allReviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
