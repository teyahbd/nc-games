import VoteButton from "./VoteButton";
import { useState } from "react";

const VoteContainer = ({ review, user, userVotesStr }) => {
  const [optimisticVoteInc, setOptimisticVoteInc] = useState(0);
  console.log(userVotesStr, "updated");

  return (
    <div className="vote-container">
      <VoteButton
        voteType="upvote"
        userVotesStr={userVotesStr}
        setOptimisticVoteInc={setOptimisticVoteInc}
        review_id={review.review_id}
      />
      <p className="footer-votes">Votes: {review.votes + optimisticVoteInc}</p>
      <VoteButton
        voteType="downvote"
        userVotesStr={userVotesStr}
        setOptimisticVoteInc={setOptimisticVoteInc}
        review_id={review.review_id}
      />
    </div>
  );
};

export default VoteContainer;
