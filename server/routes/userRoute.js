import express from "express";

import signup from "../controller/usercontrollers/signup.js";
import login from "../controller/usercontrollers/login.js";
import { userDetail } from "../controller/usercontrollers/user.details.js";
import isAuthenticated from "../controller/usercontrollers/authenticate.js";
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/authenticated',isAuthenticated);
router.get('/dashboard/:username',userDetail);
export default router ;