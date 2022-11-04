import { Card } from "react-bootstrap";
import VoteButton from "./VoteButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review, user, updatedVoteInc }) => {
  const [voteIncrement, setVoteIncrement] = useState(
    Number(updatedVoteInc.split("")[review.review_id - 1])
  );
  const [isNewSession, setIsNewSession] = useState(true);
  const [voteMultiplier, setVoteMultiplier] = useState(1);

  const voteCount = isNewSession
    ? review.votes
    : review.votes + (voteIncrement - 1) * voteMultiplier;
  return (
    <Card className="card">
      <div className="card-horizontal">
        <Card.Img src={`${review.review_img_url}`} className="card-img" />
        <Card.Body>
          {/* conditional link based on whether you came from home or not? */}
          <Link to={`/${review.category}/${review.review_id}`}>
            <Card.Title className="card-title">{review.title}</Card.Title>
          </Link>
          <Card.Text>{`Posted by ${review.owner}`}</Card.Text>
          <Card.Text className="card-body">{review.review_body}</Card.Text>
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
          updatedVoteInc={updatedVoteInc}
          setVoteMultiplier={setVoteMultiplier}
          voteMultiplier={voteMultiplier}
        />
        <Card.Text className="footer-votes">Votes: {voteCount}</Card.Text>
        <VoteButton
          voteType="minus"
          review_id={review.review_id}
          user={user}
          voteIncrement={voteIncrement}
          setVoteIncrement={setVoteIncrement}
          setIsNewSession={setIsNewSession}
          updatedVoteInc={updatedVoteInc}
          setVoteMultiplier={setVoteMultiplier}
          voteMultiplier={voteMultiplier}
        />
        <Card.Text className="footer-comment">
          Comments: {`${review.comment_count}`}
        </Card.Text>
      </div>
    </Card>
  );
};

export default ReviewCard;
