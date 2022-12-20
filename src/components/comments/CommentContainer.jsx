import CommentCard from "./CommentCard";
import Loader from "../Loader";
import { useState, useEffect } from "react";
import * as api from "../../api";

const CommentContainer = ({ review_id, review_author, users }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.fetchCommentsByReviewId(review_id).then(({ data: { comments } }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div className="loader-box">
        <Loader />
      </div>
    );

  return (
    <div className="comment-container">
      <h2 className="comments-header">What do you think?</h2>
      {comments.length === 0 ? (
        <h2>No comments yet... Why not be the first?</h2>
      ) : (
        comments.map((comment) => {
          return (
            <CommentCard
              review_id={review_id}
              comment={comment}
              key={comment.comment_id}
              users={users}
              review_author={review_author}
            />
          );
        })
      )}
    </div>
  );
};

export default CommentContainer;
