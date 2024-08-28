import express, { json } from 'express';
import connectToDatabase from './database/config.js';
const app = express();
import urlRouter from './routes/urls.js';
import cors from 'cors';

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

connectToDatabase().then(() => {
  app.use(json());
  app.use('/api', urlRouter);

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});