// require("dotenv").config();
import express, { json } from 'express';
import { connect } from 'mongoose';
import userRoute from './routes/userRoute.js';
const app = express();
const PORT = 3111;

app.use(json());

//API routes

app.use('/api/user',userRoute);
// app.use('/api/blog',blogRoute);

connect(`mongodb+srv://Sibichandru:Sibi2003@usercluster.i87grvl.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(()=>app.listen(PORT))
        .then(()=>console.log('connected and running in port 3111'))
        .catch((err)=>console.log(err));