import React from 'react';

const Book = ({ id, title, author, price, onClick, rating }) => (
  <li onClick={() => onClick(id)}>
    <div>{title}</div>
    <div>{author}</div>
    <div>{price}</div>
    <div>{rating}</div>
  </li>
);

export default Book;
