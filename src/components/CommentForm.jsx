import * as api from "../api";
import { useState } from "react";

const CommentForm = ({ review_id, user }) => {
  const [comment, setComment] = useState("");
  function handleChange(event) {
    setComment(event.target.value);
    console.log(comment);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(review_id, comment, user.username);
    api.addCommentByReviewId(review_id, comment, user.username);
  }
  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommentForm;
