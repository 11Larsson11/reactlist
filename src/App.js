import Reviews from "./components/Reviews/Reviews";

const App = () => {
  const bookReviews = [
    {
      id: "e1",
      date: new Date(2022, 2, 21),
      bookName: "The cat",
      author: "George Dundee",
      description: "A dystopic novel, set in a not too distant future.",
      review: "8/10",
    },
    {
      id: "e2",
      date: new Date(2022, 1, 15),
      bookName: "Blame it on the sunshine",
      author: "Fran Getz",
      description: "A fun, melodramatic book about an afternoon gone wrong.",
      review: "3/10",
    },
    {
      id: "e3",
      date: new Date(2020, 7, 9),
      bookName: "Dreamcleaner",
      author: "Steven G Lair",
      description: "An in-depth book about dry cleaning.",
      review: "1/10",
    },
    {
      id: "e4",
      date: new Date(2021, 5, 12),
      bookName: "World Wide Web",
      author: "Stone Roe",
      description: "A brief history of the internet.",
      review: "8/10",
    },
  ];

  return (
    <div className="App">
      <h1>Books read</h1>
      <Reviews items={bookReviews}/>
    </div>
  );
};

export default App;
