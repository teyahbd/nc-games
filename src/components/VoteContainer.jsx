import VoteButton from "./VoteButton";
import { useState } from "react";

const VoteContainer = ({ review, user, updatedVoteInc }) => {
  const [voteIncrement, setVoteIncrement] = useState(
    Number(updatedVoteInc.split("")[review.review_id - 1])
  );
  const [isNewSession, setIsNewSession] = useState(true);
  const [voteMultiplier, setVoteMultiplier] = useState(1);

  const voteCount = isNewSession
    ? review.votes
    : review.votes + (voteIncrement - 1) * voteMultiplier;
  return (
    <div className="vote-container">
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
      <p className="footer-votes">Votes: {voteCount}</p>
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
    </div>
  );
};

export default VoteContainer;
