import React from 'react';
import BookList from './BookList';

class App extends React.Component {
  state = { answer: 42 };

  render() {
    return (
      <div>
        <h2>Hello component {this.state.answer}</h2>
        <BookList />
      </div>
    );
  }
}

export default App;
