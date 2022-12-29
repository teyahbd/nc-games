import { useParams } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./nav/Sidebar.jsx";
import Dropdown from "./nav/Dropdown";
import AllReviews from "./pages/AllReviews";
import CategoryReviews from "./pages/CategoryReviews";
import SingleReview from "./pages/SingleReview";

import useResize from "../hooks/useResize";

const MainPage = ({ user, allCategories, type, users }) => {
  const { review_id, category } = useParams();

  const isMobile = useResize();

  return (
    <div className="page">
      <Header user={user} />
      <div className="main-page">
        {isMobile ? (
          <Dropdown
            allCategories={allCategories}
            currentCategory="all reviews"
          />
        ) : (
          <Sidebar allCategories={allCategories} />
        )}
        <div className="main-page">
          {type === "single-review" ? (
            <SingleReview
              review_id={review_id}
              category={category}
              users={users}
              user={user}
            />
          ) : type === "category" ? (
            <CategoryReviews
              category={category}
              allCategories={allCategories}
            />
          ) : (
            <AllReviews />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
