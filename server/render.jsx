import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from '../client/components/App';

export default () => axios.get('http://localhost:3000/api/books')
  .then(resp => ({
    markup: ReactDOMServer.renderToString(<App initialData={resp.data} />),
    data: resp.data,
  }));
