import express from 'express';
import cors from 'cors';

import renderString from './render';
import apiRouter from './apiRouter';

const app = express();

app.use(express.static('client'));
app.use(cors());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  renderString().then((renderData) => {
    res.render('index', {
      markup: renderData.markup,
      initialData: renderData.data,
    });
  });
});

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server running...');
});
