import express from 'express';
import multer from 'multer';

import { addPost, posts , } from '../controller/postcontrollers/posts.js';
import { like, unlike } from '../controller/postcontrollers/post-action.js';

const upload = multer({dest:'uploads'});
const router = express.Router();

//get and set posts
router.get('/posts',posts);
router.post('/addPost',upload.single('post'),addPost);

//post-actions
router.patch('/like',like);
router.patch('/unlike',unlike);


export default router;