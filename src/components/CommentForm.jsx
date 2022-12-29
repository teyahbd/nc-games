import { useState } from "react";

import CommentCard from "./CommentCard";

import * as api from "../api";

const CommentForm = ({ review_id, review_author, username, users }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isCommentPosted, setIsCommentPosted] = useState(false);

  function handleChange(event) {
    setCommentBody(event.target.value);
    console.log(commentBody);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(review_id, commentBody, username);
    setIsCommentPosted(true);
    api.addCommentByReviewId(review_id, username, commentBody);
  }

  {
    return isCommentPosted ? (
      <div id="comment-form">
        <p>Comment posted!</p>
        <CommentCard
          review_author={review_author}
          comment={{ body: commentBody, author: username }}
          users={users}
        />
      </div>
    ) : (
      <form onSubmit={handleSubmit} id="form-container">
        <input type="text" onChange={handleChange} id="comment-form"></input>
        <button type="submit" id="post-comment-button">
          POST
        </button>
      </form>
    );
  }
};

export default CommentForm;
