import React from 'react';

const Book = ({ id, title, author, price, onRatingClick, rating, onClick }) => (
  <li onClick={() => onClick(id)}>
    <div>Book</div>
    <div>{title}</div>
    <div>{author}</div>
    <div>{price}</div>
    <a href="#" onClick={() => onRatingClick(id)}>Show ratings</a>
  </li>
);

export default Book;
