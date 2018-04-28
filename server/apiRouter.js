import express from 'express';
import { Pool } from 'pg';

const apiRouter = express.Router();
const pool = new Pool({
  database: 'books-dev',
});

apiRouter.get('/books', (req, res) => {
  pool.query('SELECT * from books', [])
    .then((qres) => {
      res.json(qres.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

apiRouter.get('/books/:bookId/ratings', (req, res) => {
  pool.query('SELECT * from reviews WHERE book_id = $1', [req.params.bookId])
    .then((qres) => {
      res.json(qres.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});


export default apiRouter;
