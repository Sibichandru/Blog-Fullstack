import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoute from './routes/userRoute.js'

const app = express();
const port = process.env.PORT;

const allowedOrigins = ['http://localhost:8080'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());

app.use('/api/user',userRoute);

mongoose
  .connect('mongodb://127.0.0.1:27017',)//change to env file
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
