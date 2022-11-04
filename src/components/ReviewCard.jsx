import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VoteContainer from "./VoteContainer";
import { useState, useEffect } from "react";

const ReviewCard = ({
  review,
  user,
  userVotesStr,
  localUserVotesStr,
  setLocalUserVotesStr,
}) => {
  const [buttonStyling, setButtonStyling] = useState(["", ""]);

  useEffect(() => {
    const previousVote = userVotesStr.split("")[review.review_id - 1];

    if (previousVote === "1") {
      setButtonStyling(["", ""]);
    } else if (previousVote === "0") {
      setButtonStyling(["", "downvote"]);
    } else if (previousVote === "2") {
      setButtonStyling(["upvote", ""]);
    }
  }, []);

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
        <VoteContainer
          review={review}
          buttonStyling={buttonStyling}
          setButtonStyling={setButtonStyling}
          userVotesStr={userVotesStr}
          user={user}
          localUserVotesStr={localUserVotesStr}
          setLocalUserVotesStr={setLocalUserVotesStr}
        />
        <Card.Text className="footer-comment">
          Comments: {`${review.comment_count}`}
        </Card.Text>
      </div>
    </Card>
  );
};

export default ReviewCard;
