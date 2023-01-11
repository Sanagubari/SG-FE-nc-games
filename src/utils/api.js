import axios from "axios";

export const fetchReviews = (category) => {

  return axios
    .get("https://sg-nc-games.onrender.com/api/reviews", {
      params: { category: category },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const fetchCategories = () => {
  return axios
    .get("https://sg-nc-games.onrender.com/api/categories")
    .then((res) => {
      return res.data.categories;
    });
};

export const fetchSingleReview = (reviewId) => {
  return axios
    .get(`https://sg-nc-games.onrender.com/api/reviews/${reviewId}`)
    .then((res) => {
      return res.data.review;
    });
};

export const fetchComments = (reviewId) => {
  return axios
    .get(`https://sg-nc-games.onrender.com/api/reviews/${reviewId}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};
