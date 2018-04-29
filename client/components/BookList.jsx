import React from 'react';
import Book from './Book';

const BookList = ({ books, onBookClick, calcRatingForBook, onTitleClick }) => (
  <ul>
    {books.map(book => (
      <Book
        key={book.id}
        {...book}
        onRatingClick={onBookClick}
        rating={calcRatingForBook(book.id)}
        onClick={onTitleClick}
      />
    ))}
  </ul>
);

export default BookList;
