import express from "express";

import { posts } from "../controller/postcontrollers/posts.js";

const router = express.Router();

router.get('/posts',posts)

export default router;