import { useState } from "react";
import * as api from "../api";

const VoteContainer = ({ review, user, userVotesStr }) => {
  const [optimisticVoteInc, setOptimisticVoteInc] = useState(0);
  const [buttonStyling, setButtonStyling] = useState(["", ""]);
  console.log(optimisticVoteInc);
  console.log(userVotesStr, "updated");

  function handleClick(userVote) {
    console.log("click", userVote);
    setOptimisticVoteInc((currentVote) => currentVote + userVote);

    userVote === 1
      ? setButtonStyling(["upvote", ""])
      : setButtonStyling(["", "downvote"]);
    api
      .updateVotes(review.review_id, userVote)
      .then(({ data }) => console.log(data));
  }

  console.log(buttonStyling);
  return (
    <div className="vote-container">
      <button
        className={`vote-button ${buttonStyling[0]}`}
        onClick={() => {
          handleClick(1);
        }}
      >
        Upvote
      </button>
      <p className="footer-votes">Votes: {review.votes + optimisticVoteInc}</p>
      <button
        className={`vote-button ${buttonStyling[1]}`}
        onClick={() => {
          handleClick(-1);
        }}
      >
        Downvote
      </button>
    </div>
  );
};

export default VoteContainer;
