const CommentCard = ({ review_id, review_author, comment, users }) => {
  // could do op styling
  const commentor = users.filter((user) => {
    return user.username === comment.author;
  });

  let cardStyling = "comment-card";
  let userName = `${comment.author}`;

  if (comment.author === review_author) {
    cardStyling = "comment-card op-comment";
    userName = `⭐ ${comment.author}`;
  }

  return (
    <div className={`${cardStyling}`}>
      <img
        src={`${commentor[0].avatar_url}`}
        alt=""
        className="commentor-avatar"
      />
      <div className="comment-text">
        <p className="commentor">{`${userName} says...`}</p>
        <p className="comment-body">{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
