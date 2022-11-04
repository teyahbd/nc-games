import axios from "axios";

const api = axios.create({
  baseURL: "https://teyah-nc-games-app.herokuapp.com/",
});

export const fetchReviewsByCategory = (category) => {
  return api.get(`/api/reviews?category=${category}`);
};
export const fetchReviews = () => {
  return api.get("/api/reviews");
};
export const fetchCategories = () => {
  return api.get("/api/categories");
};

export const fetchReviewById = (review_id) => {
  return api.get(`/api/reviews/${review_id}`);
};

export const fetchCommentsByReviewId = (review_id) => {
  return api.get(`/api/reviews/${review_id}/comments`);
};

export const fetchUsers = () => {
  return api.get("/api/users");
};
//add catch?
