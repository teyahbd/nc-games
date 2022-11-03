import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "./api";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import Header from "./components/Header";
import AllReviews from "./components/AllReviews";
import CategoryView from "./components/CategoryView";

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // change user to a react context

  useEffect(() => {
    api
      .fetchCategories()
      .then(({ data: { categories } }) => {
        setAllCategories(categories);
      })
      .then((categories) => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        setUser(users[5]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <BrowserRouter>
      <div className="App">
        <Header allCategories={allCategories} user={user} />
        <Routes>
          <Route path="/" element={<AllReviews user={user} />} />
          <Route
            path="/:category"
            element={<CategoryView allCategories={allCategories} user={user} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
