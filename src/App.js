import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "./api";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import Header from "./components/Header";
import ReviewsView from "./components/ReviewsView";
import SingleReview from "./components/SingleReview";
import CategoryView from "./components/CategoryView";

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchCategories().then(({ data: { categories } }) => {
      setAllCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <BrowserRouter>
      <div className="App">
        <Header allCategories={allCategories} />
        <Routes>
          <Route path="/" element={<ReviewsView />} />
          <Route
            path="/:category"
            element={<CategoryView allCategories={allCategories} />}
          />
          <Route
            path="/:category/:review_id"
            element={<SingleReview allCategories={allCategories} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
