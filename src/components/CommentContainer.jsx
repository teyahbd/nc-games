import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import * as api from "../api";

const CommentContainer = ({ review_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .fetchCommentsByReviewId(review_id)
      .then(({ data: { comments } }) => {
        setComments(comments);
      })
      .then((comments) => {
        return api.fetchUsers();
      })
      .then(({ data: { users } }) => {
        setUsers(users);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner animation="border" />;
  return (
    <div className="comment-container">
      {comments.map((comment) => {
        return (
          <CommentCard
            review_id={review_id}
            comment={comment}
            key={comment.comment_id}
            users={users}
          />
        );
      })}
    </div>
  );
};

export default CommentContainer;
