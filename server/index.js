/* eslint-disable no-underscore-dangle */
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import userRoute from './routes/userRoute';
import postRoute from './routes/postRoute';

const app = express();
const port = process.env.PORT || 3111;
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(`${__dirname}/uploads`));

const allowedOrigins = ['http://localhost:8080', 'http://localhost:3111'];
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, allowedOrigins.includes(origin));
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use('/api/user', userRoute);

app.use('/api/post', postRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
