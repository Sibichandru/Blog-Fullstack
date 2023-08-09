import express from "express";

import signup from "../controller/usercontrollers/signup.js";
import login from "../controller/usercontrollers/login.js";

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);

export default router ;