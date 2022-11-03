const CommentCard = ({ review_id, comment, users }) => {
  const commentor = users.filter((user) => {
    return user.username === comment.author;
  });
  console.log(commentor);
  return (
    <div className="comment-card">
      <img
        src={`${commentor[0].avatar_url}`}
        alt=""
        className="commentor-avatar"
      />
      <div className="comment-text">
        <p className="commentor">{`${comment.author} says...`}</p>
        <p className="comment-body">{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
