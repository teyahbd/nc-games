import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "./api";
import "./App.css";
import Loader from "./components/Loader";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./components/pages/LandingPage";
import MainPage from "./components/MainPage";

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
      <div className="app-loader-box">
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
          <Route
            path="/home"
            element={
              user === null ? (
                <Navigate to="/" />
              ) : (
                <MainPage
                  user={user}
                  users={users}
                  allCategories={allCategories}
                  type="home"
                />
              )
            }
          />
          <Route
            path="/:category"
            element={
              user === null ? (
                <Navigate to="/" />
              ) : (
                <MainPage
                  allCategories={allCategories}
                  user={user}
                  users={users}
                  type="category"
                />
              )
            }
          />
          <Route
            path="/:category/:review_id"
            element={
              user === null ? (
                <Navigate to="/" />
              ) : (
                <MainPage
                  allCategories={allCategories}
                  user={user}
                  users={users}
                  type="single-review"
                />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
