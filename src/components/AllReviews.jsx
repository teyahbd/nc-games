import { useState, useEffect } from "react";
import Header from "./header/Header";
import Sidebar from "./nav/Sidebar.jsx";
import Dropdown from "./nav/Dropdown";
import ReviewList from "./ReviewList";

const AllReviews = ({ user, allCategories }) => {
  /// refactor so this frame can be used for all reviews and all categories
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

  if (isMobile)
    return (
      <div className="page">
        <Header user={user} />
        <div className="main-page">
          <Dropdown
            allCategories={allCategories}
            currentCategory="all reviews"
          />
          <ReviewList />
        </div>
      </div>
    );

  return (
    <div className="page">
      <Header user={user} />
      <div className="main-page">
        <Sidebar allCategories={allCategories} />
        <ReviewList />
      </div>
    </div>
  );
};

export default AllReviews;
