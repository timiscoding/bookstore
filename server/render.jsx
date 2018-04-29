import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from '../client/components/App';

const getUrl = (bookId) => {
  if (bookId) {
    return `http://localhost:3000/api/books/${bookId}`;
  }
  return 'http://localhost:3000/api/books';
};

export default (bookId) => axios.get(getUrl(bookId))
  .then(resp => {
    return {
      markup: ReactDOMServer.renderToString(<App initialData={resp.data} />),
      data: resp.data,
    };
  });
