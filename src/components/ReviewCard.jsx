import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="card">
      <div className="card-horizontal">
        <img src={`${review.review_img_url}`} className="card-img" />
        <div>
          {/* conditional link based on whether you came from home or not? */}
          <Link to={`/${review.category}/${review.review_id}`}>
            <h3 className="card-title">{review.title}</h3>
          </Link>
          <p>{`Posted by ${review.owner}`}</p>
          <p className="card-body">{review.review_body}</p>
        </div>
      </div>
      <div className="card-footer">
        <p className="footer-votes"> ❤️ {`${review.votes}`}</p>
        <p className="footer-comment">💬 {`${review.comment_count}`}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
