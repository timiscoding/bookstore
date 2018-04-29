import React from 'react';

const Book = ({ title, author, price }) => (
  <li>
    <div>{title}</div>
    <div>{author}</div>
    <div>{price}</div>
  </li>
);

export default Book;
