import express from 'express';

import signup from '../controller/usercontrollers/signup.js';
import login from '../controller/usercontrollers/login.js';
import changePassword from '../controller/usercontrollers/changePassword.js';
import dashboard from '../controller/usercontrollers/dashboard.js';
import { isAuthenticated, logout } from '../controller/usercontrollers/authenticate.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/changePassword', changePassword);
router.get('/authenticated', isAuthenticated);
router.post('/logout', logout);
router.get('/dashboard/:id', dashboard);
export default router;
