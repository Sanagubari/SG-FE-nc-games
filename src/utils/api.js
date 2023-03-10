import axios from "axios";

const instance = axios.create({
  baseURL: "https://sg-nc-games.onrender.com/api",
});
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export const fetchReviews = (category, sortBy, orderBy) => {
  return instance
    .get(`/reviews`, {
      params: { category: category, sort_by: sortBy, order: orderBy },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const fetchCategories = () => {
  return instance.get(`/categories`).then((res) => {
    return res.data.categories;
  });
};

export const fetchSingleReview = (reviewId) => {
  return instance.get(`/reviews/${reviewId}`).then((res) => {
    return res.data.review;
  });
};

export const fetchComments = (reviewId) => {
  return instance.get(`/reviews/${reviewId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchVoteByReviewID = (reviewId, votes) => {
  return instance
    .patch(`/reviews/${reviewId}`, { inc_votes: votes })
    .then((res) => {
      return res.data.review;
    });
};

export const postComment = (comment, username, reviewId) => {
  return instance
    .post(`/reviews/${reviewId}/comments`, {
      username: username,
      body: comment,
    })
    .then((res) => {
      return res.data.newComment;
    });
};

export const fetchUsers = () => {
  return instance.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const deleteComment = (commentId) => {
  return instance.delete(`/comments/${commentId}`).then((res) => {
    return res.data;
  });
};

export const patchVoteByCommentId = (commentId, votes) => {
  return instance
    .patch(`/comments/${commentId}`, { inc_votes: votes })
    .then((res) => {
      return res.data.comment;
    });
};

export const postReview = (username, title, body, designer, category) => {
  return instance
    .post(`/reviews`, {
      owner: username,
      title: title,
      review_body: body,
      designer: designer,
      category: category,
    })
    .then((res) => {
      return res.data.newReview;
    });
};
