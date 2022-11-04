import { useState } from "react";
import * as api from "../api";

const VoteContainer = ({
  review,
  buttonStyling,
  setButtonStyling,
  userVotesStr,
  user,
  localUserVotesStr,
  setLocalUserVotesStr,
}) => {
  const [optimisticVoteInc, setOptimisticVoteInc] = useState(0);

  console.log("rerender vote container!");

  function handleClick(userVote) {
    let newUserVotesStr = localUserVotesStr.split("");
    if (buttonStyling[0] === "" && buttonStyling[1] === "") {
      setOptimisticVoteInc((currentVote) => currentVote + userVote);

      let newUserVote = "1";

      if (userVote === 1) {
        setButtonStyling(["upvote", ""]);
        newUserVote = "2";
      } else {
        setButtonStyling(["", "downvote"]);
        newUserVote = "0";
      }

      newUserVotesStr[review.review_id - 1] = newUserVote;
      newUserVotesStr = newUserVotesStr.join("");
      setLocalUserVotesStr(newUserVotesStr);
      console.log(newUserVotesStr);

      api
        .updateVotes(review.review_id, userVote)
        .then(({ data }) => console.log(data))
        .then(() => {
          return api.updateUserVoteInc(user.username, newUserVotesStr);
        })
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[0] === "upvote" && userVote === 1) {
      setOptimisticVoteInc((currentVote) => currentVote - 1);

      setButtonStyling(["", ""]);

      newUserVotesStr[review.review_id - 1] = "1";
      newUserVotesStr = newUserVotesStr.join("");
      setLocalUserVotesStr(newUserVotesStr);
      console.log(newUserVotesStr);

      api
        .updateVotes(review.review_id, -1)
        .then(({ data }) => console.log(data))
        .then(() => {
          return api.updateUserVoteInc(user.username, newUserVotesStr);
        })
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[1] === "downvote" && userVote === -1) {
      setOptimisticVoteInc((currentVote) => currentVote + 1);

      setButtonStyling(["", ""]);
      newUserVotesStr[review.review_id - 1] = "1";
      newUserVotesStr = newUserVotesStr.join("");
      setLocalUserVotesStr(newUserVotesStr);
      console.log(newUserVotesStr);
      api
        .updateVotes(review.review_id, 1)
        .then(({ data }) => console.log(data))
        .then(() => {
          return api.updateUserVoteInc(user.username, newUserVotesStr);
        })
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[0] === "upvote" && userVote === -1) {
      setOptimisticVoteInc((currentVote) => currentVote - 2);

      setButtonStyling(["", "downvote"]);
      newUserVotesStr[review.review_id - 1] = "0";
      newUserVotesStr = newUserVotesStr.join("");
      setLocalUserVotesStr(newUserVotesStr);
      console.log(newUserVotesStr);
      api
        .updateVotes(review.review_id, -2)
        .then(({ data }) => console.log(data))
        .then(() => {
          return api.updateUserVoteInc(user.username, newUserVotesStr);
        })
        .then(({ data }) => console.log(data));
    } else if (buttonStyling[1] === "downvote" && userVote === 1) {
      setOptimisticVoteInc((currentVote) => currentVote + 2);

      setButtonStyling(["upvote", ""]);
      newUserVotesStr[review.review_id - 1] = "2";
      newUserVotesStr = newUserVotesStr.join("");
      setLocalUserVotesStr(newUserVotesStr);
      console.log(newUserVotesStr);
      api
        .updateVotes(review.review_id, 2)
        .then(({ data }) => console.log(data))
        .then(() => {
          return api.updateUserVoteInc(user.username, newUserVotesStr);
        })
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
