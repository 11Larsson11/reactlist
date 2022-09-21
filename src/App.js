import React, { useState } from "react";
import NewReview from "./components/NewReview/NewReview";
import Reviews from "./components/Reviews/Reviews";

const baseReviews = [
  {
    id: "e1",
    date: new Date(2022, 2, 21),
    title: "The cats",
    author: "George Dundee",
    description: "A dystopic novel, set in a not too distant future.",
    review: 8,
  },
  {
    id: "e2",
    date: new Date(2022, 1, 15),
    title: "Blame the sunshine",
    author: "Fran Getz",
    description: "A fun, yet melodramatic book about weather.",
    review: 3,
  },
  {
    id: "e3",
    date: new Date(2020, 7, 9),
    title: "Dreamcleaner",
    author: "Steven G Laird",
    description: "An in-depth book about dry cleaning.",
    review: 1,
  },
  {
    id: "e4",
    date: new Date(2021, 5, 12),
    title: "World Wide Web",
    author: "Stone Roe",
    description: "A brief history of the internet.",
    review: 8,
  },
];

const App = () => {
  const [reviews, setReviews] = useState(baseReviews);

  const addReviewHandler = review => {
    setReviews((prevReviews) => {
      return [review, ...prevReviews]
    });
  };

  return (
    <div className="App">
      <NewReview onAddReview={addReviewHandler} />
      <Reviews items={reviews} />
    </div>
  );
};

export default App;
