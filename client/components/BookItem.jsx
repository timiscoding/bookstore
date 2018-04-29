import React from 'react';

const BookItem = ({ id, title, author, price, onRatingClick, rating }) => (
  <li onClick={() => onClick(id)}>
    <div>{title}</div>
    <div>{author}</div>
    <div>{price}</div>
    <a href="#" onClick={() => onRatingClick(id)}>Show ratings</a>
  </li>
);

export default BookItem;
