import * as api from "../api";

const VoteButton = ({
  voteType,
  setOptimisticVoteInc,
  userVotesStr,
  review_id,
}) => {
  const userVote = voteType === "upvote" ? 1 : -1;
  console.log("button rerender!");

  function handleClick() {
    console.log("click", userVote);
    setOptimisticVoteInc((currentVote) => currentVote + userVote);

    api.updateVotes(review_id, userVote).then(({ data }) => console.log(data));
  }

  return (
    <button className={`vote-button ${voteType}`} onClick={handleClick}>
      {voteType}
    </button>
  );
};

export default VoteButton;
