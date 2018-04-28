const { Pool } = require('pg');

const pool = new Pool({
  database: 'books-dev',
});

pool.query('SELECT * from books', [])
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => {
    console.log(err);
  });
