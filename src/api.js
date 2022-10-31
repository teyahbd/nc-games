import axios from "axios";

const api = axios.create({
  baseURL: "https://dashboard.heroku.com/apps/teyah-nc-games-app",
});

export const fetchReviews = () => {
  return api.get("/api/reviews");
};

//add catch?
