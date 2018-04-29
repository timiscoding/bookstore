import React from 'react';
import BookList from './BookList';

class App extends React.Component {
  state = { books: this.props.initialData };

  render() {
    return (
      <div>
        <h2>Hello component {this.state.answer}</h2>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
