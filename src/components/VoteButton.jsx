import * as api from "../api";

const VoteButton = ({
  voteType,
  review_id,
  user,
  voteIncrement,
  setVoteIncrement,
  setIsNewSession,
}) => {
  const buttonText = voteType === "plus" ? "Upvote" : "Downvote";

  let buttonStyling = "";
  if (voteIncrement === 2 && voteType === "plus") {
    buttonStyling = "upvote";
  } else if (voteIncrement === 0 && voteType === "minus") {
    buttonStyling = "downvote";
    console.log("red");
  }

  function handleClick() {
    setIsNewSession(false);
    function updateVote(vote, voteInc) {
      api.updateVotes(review_id, vote).then(({ data }) => console.log(data));

      setVoteIncrement(voteInc);

      const newVoteIncArr = [...user.vote_increments];
      newVoteIncArr[review_id - 1] = voteInc.toString();

      api
        .updateUserVoteInc(user.username, newVoteIncArr.join(""))
        .then(({ data }) => console.log(data));
    }

    if (voteIncrement === 1 && voteType === "plus") {
      const vote = 1;
      const voteInc = 2;
      updateVote(vote, voteInc);
      buttonStyling = "upvote";
    } else if (voteIncrement === 1 && voteType === "minus") {
      const vote = -1;
      const voteInc = 0;
      updateVote(vote, voteInc);
      buttonStyling = "downvote";
    } else if (voteIncrement === 2 && voteType === "plus") {
      const vote = -1;
      const voteInc = 1;
      updateVote(vote, voteInc);
      buttonStyling = "";
    } else if (voteIncrement === 0 && voteType === "minus") {
      const vote = 1;
      const voteInc = 1;
      updateVote(vote, voteInc);
      buttonStyling = "";
    } else if (voteIncrement === 2 && voteType === "minus") {
      const vote = -2;
      const voteInc = 0;
      updateVote(vote, voteInc);
      buttonStyling = "downvote";
    } else if (voteIncrement === 0 && voteType === "plus") {
      const vote = 2;
      const voteInc = 2;
      updateVote(vote, voteInc);
      buttonStyling = "upvote";
    }
  }

  return (
    <button className={`vote-button ${buttonStyling}`} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default VoteButton;
