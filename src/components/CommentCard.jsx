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
      <p className="commentor">{`${comment.author} says...`}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
