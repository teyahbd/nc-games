import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "./api";
import "./App.css";
/* import "bootstrap/dist/css/bootstrap.min.css"; */

import Header from "./components/header/Header";
import AllReviews from "./components/AllReviews";
import SingleReview from "./components/SingleReview";
import CategoryView from "./components/CategoryView";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar.jsx";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./components/login/LandingPage";

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  // add react context for both above later
  useEffect(() => {
    api
      .fetchCategories()
      .then(({ data: { categories } }) => {
        setAllCategories(categories);
      })
      .then(() => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        setUsers(users);
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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<LandingPage users={users} setUser={setUser} />}
          />
          <Route path="/home" element={<AllReviews user={user} />} />
          <Route
            path="/:category"
            element={<CategoryView allCategories={allCategories} user={user} />}
          />
          <Route
            path="/:category/:review_id"
            element={
              <SingleReview allCategories={allCategories} users={users} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
