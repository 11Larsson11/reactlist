import ListItem from "./ListItem";
import "./ReviewList.css";

const ReviewList = (props) => {

if (props.items.length === 0) {
    return <h2 className="review-list__fallback">No reviews for this year.</h2>
}

  return (
    <ul className="review-list">
      {props.items.map((review) => (
        <ListItem
          key={review.id}
          date={review.date}
          title={review.title}
          author={review.author}
          description={review.description}
          review={review.review}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
