import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import * as api from "../api";

const ReviewsView = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    api.fetchReviews().then(({ data }) => {
      console.log(data[0]);
      setAllReviews(data);
    });
  }, []);

  return (
    <div className="reviews">
      {allReviews.map((review) => {
        console.log(review);
        return (
          <Card className="card">
            <div className="card-horizontal">
              <Card.Img src={`${review.review_img_url}`} className="card-img" />
              <Card.Body>
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>{review.owner}</Card.Text>
              </Card.Body>
            </div>
            <div className="card-footer">
              <Card.Text>Comments: {`${review.comment_count}`}</Card.Text>
              <Card.Text>Votes: {`${review.votes}`}</Card.Text>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ReviewsView;
