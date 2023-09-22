import express from "express";
import multer from "multer";

import { posts } from "../controller/postcontrollers/posts.js";
import {addPost} from "../controller/postcontrollers/addPost.js";

const upload = multer({dest:'uploads/'})
const router = express.Router();

router.get('/posts',posts)
router.post('/addPost',upload.single('post'),addPost);

export default router;