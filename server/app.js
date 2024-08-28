import express, { json } from 'express';
const app = express();
import urlRouter from './routes/urls.js';

app.use(json());
app.use('/api', urlRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});