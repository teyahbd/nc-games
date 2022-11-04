import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import * as api from "../api";

const CommentContainer = ({ review_id, review_author, users, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.fetchCommentsByReviewId(review_id).then(({ data: { comments } }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner animation="border" />;
  return (
    <div>
      <div className="comment-container">
        <h2 className="comments-header">Comments:</h2>
        {comments.map((comment) => {
          return (
            <CommentCard
              review_id={review_id}
              comment={comment}
              key={comment.comment_id}
              users={users}
              review_author={review_author}
            />
          );
        })}
        <h3 className="comment-form-header">Say Something!</h3>
        <CommentForm review_id={review_id} user={user} />
      </div>
    </div>
  );
};

export default CommentContainer;
