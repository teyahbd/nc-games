import { useState, useEffect, useParams } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCard";
import Loader from "./Loader";
import Header from "./header/Header";
import Sidebar from "./Sidebar.jsx";

const AllReviews = ({ user, allCategories }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviews().then(({ data }) => {
      setAllReviews(data);
      setIsLoading(false);
    });
  }, []);

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
