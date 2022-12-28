import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-reviews.onrender.com",
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

export const fetchSortedReviews = (sortBy, order) => {
  return api.get(`/api/reviews?sort_by=${sortBy}&order=${order}`);
};

export const fetchSortedReviewsByCategory = (category, sortBy, order) => {
  return api.get(
    `/api/reviews?category=${category}&sort_by=${sortBy}&order=${order}`
  );
};
//add catch?
