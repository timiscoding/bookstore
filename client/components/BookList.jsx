import React from 'react';
import Book from './Book';

const BookList = ({ books, onBookClick, calcRatingForBook }) => (
  <ul>
    {books.map(book => (
      <Book
        key={book.id}
        {...book}
        onClick={onBookClick}
        rating={calcRatingForBook(book.id)}
      />
    ))}
  </ul>
);

export default BookList;
