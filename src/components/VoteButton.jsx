import * as api from "../api";

const VoteButton = ({
  voteType,
  review_id,
  user,
  voteIncrement,
  setVoteIncrement,
  setIsNewSession,
  updatedVoteInc,
  setVoteMultiplier,
  voteMultiplier,
}) => {
  const buttonText = voteType === "plus" ? "Upvote" : "Downvote";

  let buttonStyling = "";

  if (voteIncrement >= 2 && voteType === "plus") {
    buttonStyling = "upvote";
  } else if (voteIncrement <= 0 && voteType === "minus") {
    buttonStyling = "downvote";
  }

  function handleClick() {
    console.log(voteMultiplier);
    setIsNewSession(false);

    function updateVote(vote, voteInc) {
      setVoteIncrement(voteInc);
      api.updateVotes(review_id, vote).then(({ data }) => console.log(data));

      let newVoteIncArr = updatedVoteInc.split("");
      newVoteIncArr[review_id - 1] = voteInc.toString();

      api
        .updateUserVoteInc(user.username, newVoteIncArr.join(""))
        .then(({ data }) => console.log(data));
    }

    if (voteIncrement === 1 && voteType === "plus") {
      setVoteMultiplier(1);
      updateVote(1, 2);
      buttonStyling = "upvote";
    } else if (voteIncrement === 1 && voteType === "minus") {
      setVoteMultiplier(1);
      updateVote(-1, 0);
      buttonStyling = "downvote";
    } else if (voteIncrement === 2 && voteType === "plus") {
      setVoteMultiplier(1);
      updateVote(-1, 0);
      buttonStyling = "";
    } else if (voteIncrement === 0 && voteType === "minus") {
      setVoteMultiplier(1);
      updateVote(1, 1);
      buttonStyling = "";
    } else if (voteIncrement === 2 && voteType === "minus") {
      setVoteMultiplier(2);
      updateVote(-2, 0);
      buttonStyling = "downvote";
    } else if (voteIncrement === 0 && voteType === "plus") {
      setVoteMultiplier(2);
      updateVote(2, 2);
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
