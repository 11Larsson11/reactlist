import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <form>
      <div className="new-review__controls">
      <div className="new-review__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>

        <div className="new-review__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-review__control">
          <label>Author</label>
          <input type="text" />
        </div>
        <div className="new-review__control">
          <label>Description</label>
          <input type="text" />
        </div>
        <div className="new-review__control">
          <label>Review</label>
          <input type="number" min="1" max="10" step="1" />
        </div>
      </div>
      <div className="new-review__actions">
        <button type="submit">Add Review</button>
      </div>

    </form>
  );
};

export default ReviewForm;
