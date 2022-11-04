import { useState } from "react";
import * as api from "../api";

const VoteContainer = ({ review, user, userVotesStr }) => {
  const [optimisticVoteInc, setOptimisticVoteInc] = useState(0);
  const [buttonStyling, setButtonStyling] = useState(["", ""]);

  function handleClick(userVote) {
    if (buttonStyling[0] === "" && buttonStyling[1] === "") {
      setOptimisticVoteInc((currentVote) => currentVote + userVote);

      userVote === 1
        ? setButtonStyling(["upvote", ""])
        : setButtonStyling(["", "downvote"]);
      api
        .updateVotes(review.review_id, userVote)
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[0] === "upvote" && userVote === 1) {
      setOptimisticVoteInc((currentVote) => currentVote - 1);

      setButtonStyling(["", ""]);
      api
        .updateVotes(review.review_id, -1)
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[1] === "downvote" && userVote === -1) {
      setOptimisticVoteInc((currentVote) => currentVote + 1);

      setButtonStyling(["", ""]);
      api
        .updateVotes(review.review_id, 1)
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[0] === "upvote" && userVote === -1) {
      setOptimisticVoteInc((currentVote) => currentVote - 2);

      setButtonStyling(["", "downvote"]);
      api
        .updateVotes(review.review_id, -2)
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[1] === "downvote" && userVote === 1) {
      setOptimisticVoteInc((currentVote) => currentVote + 2);

      setButtonStyling(["upvote", ""]);
      api
        .updateVotes(review.review_id, 2)
        .then(({ data }) => console.log(data));
    }
  }

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
