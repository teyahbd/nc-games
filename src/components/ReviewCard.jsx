import { Card } from "react-bootstrap";
import VoteButton from "./VoteButton";
import { useState } from "react";

const ReviewCard = ({ review, user }) => {
  const [voteIncrement, setVoteIncrement] = useState(
    Number(user.vote_increments[review.review_id - 1] + 1)
  );
  const [isNewSession, setIsNewSession] = useState(true);

  const voteCount = isNewSession
    ? review.votes
    : review.votes + (voteIncrement - 1);
  return (
    <Card className="card">
      <div className="card-horizontal">
        <Card.Img src={`${review.review_img_url}`} className="card-img" />
        <Card.Body>
          <Card.Title className="card-title">{review.title}</Card.Title>
          <Card.Text>
            <p>{`Posted by ${review.owner}`}</p>
            <p className="card-body">{review.review_body}</p>
          </Card.Text>
        </Card.Body>
      </div>
      <div className="card-footer">
        <VoteButton
          voteType="plus"
          review_id={review.review_id}
          user={user}
          voteIncrement={voteIncrement}
          setVoteIncrement={setVoteIncrement}
          setIsNewSession={setIsNewSession}
        />
        <Card.Text className="footer-votes">Votes: {voteCount}</Card.Text>
        <VoteButton
          voteType="minus"
          review_id={review.review_id}
          user={user}
          voteIncrement={voteIncrement}
          setVoteIncrement={setVoteIncrement}
          setIsNewSession={setIsNewSession}
        />
        <Card.Text className="footer-comment">
          Comments: {`${review.comment_count}`}
        </Card.Text>
      </div>
    </Card>
  );
};

export default ReviewCard;
