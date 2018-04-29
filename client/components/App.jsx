import React from 'react';
import axios from 'axios';
import BookList from './BookList';

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {},
  };

  fetchRatingForBook = (bookId) => {
    console.log(bookId);
    if (this.state.ratings[bookId]) return;

    axios.get(`http://localhost:3000/api/books/${bookId}/ratings`)
      .then((resp) => {
        this.setState((prevState) => {
          const currentRatings = prevState.ratings;
          currentRatings[bookId] = resp.data;
          return { ratings: currentRatings };
        });
      });
  }

  calcRatingForBook = (bookId) => {
    const ratings = this.state.ratings[bookId];
    if (!ratings) { return 0; }
    return ratings.reduce((sum, val) => sum + +val.rating, 0) / ratings.length;
  }

  render() {
    return (
      <div>
        <h2>Hello component {this.state.answer}</h2>
        <BookList
          books={this.state.books}
          onBookClick={this.fetchRatingForBook}
          calcRatingForBook={this.calcRatingForBook}
        />
      </div>
    );
  }
}

export default App;
