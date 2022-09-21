import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredReview, setEnteredReview] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const reviewChangeHandler = (event) => {
    setEnteredReview(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const reviewData = {
      date: new Date(enteredDate),
      title: enteredTitle,
      author: enteredAuthor,
      description: enteredDescription,
      review: enteredReview,
    };

    props.onSaveReviewData(reviewData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredDescription("");
    setEnteredReview("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-review__controls">
        <div className="new-review__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-review__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-review__control">
          <label>Author</label>
          <input
            type="text"
            value={enteredAuthor}
            onChange={authorChangeHandler}
          />
        </div>
        <div className="new-review__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-review__control">
          <label>Review</label>
          <input
            type="number"
            value={enteredReview}
            min="1"
            max="10"
            step="1"
            onChange={reviewChangeHandler}
          />
        </div>
      </div>
      <div className="new-review__actions">
        <button type="button" onClick={props.onCancel} >Cancel</button>
        <button type="submit">Add Review</button>
      </div>
    </form>
  );
};

export default ReviewForm;
