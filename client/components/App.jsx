import React from 'react';
import axios from 'axios';
import BookList from './BookList';
import Book from './Book';

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {},
    currentBookId: null,
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

  showBookPage = (bookId) => {
    history.pushState(
      { currentBookId: bookId },
      "",
      `/books/${bookId}`,
    );
    this.setState({ currentBookId: bookId });
  }

  render() {
    return (
      <div>
        {
          this.state.currentBookId
          ? <Book {...this.state.books.find(book => book.id === this.state.currentBookId)} />
          : <BookList
            books={this.state.books}
            onBookClick={this.fetchRatingForBook}
            calcRatingForBook={this.calcRatingForBook}
            onTitleClick={this.showBookPage}
          />
        }
      </div>
    );
  }
}

export default App;
