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

export const fetchUsers = () => {
  return api.get("/api/users");
};

export const updateUserVoteInc = (username, vote_increments) => {
  return api.patch(`/api/users/${username}`, {
    vote_increments: vote_increments,
  });
};
export const updateVotes = (review_id, vote) => {
  return api.patch(`/api/reviews/${review_id}`, { inc_votes: vote });
};
export const fetchReviewById = (review_id) => {
  return api.get(`/api/reviews/${review_id}`);
};

export const fetchCommentsByReviewId = (review_id) => {
  return api.get(`/api/reviews/${review_id}/comments`);
};

//add catch?
