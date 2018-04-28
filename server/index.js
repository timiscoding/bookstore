import express from 'express';
import renderString from './render';

const app = express();

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { content: renderString() });
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Server running...');
});
