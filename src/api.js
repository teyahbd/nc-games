import axios from "axios";

const api = axios.create({
  baseURL: "https://teyah-nc-games-app.herokuapp.com/",
});

export const fetchReviews = () => {
  return api.get("/api/reviews");
};

export const fetchReviewById = (review_id) => {
  return api.get(`/api/reviews/${review_id}`);
};

//add catch?
