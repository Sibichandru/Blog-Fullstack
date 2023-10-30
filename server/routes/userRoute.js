import express from 'express';

import signup from '../controller/usercontrollers/signup';
import login from '../controller/usercontrollers/login';
import changePassword from '../controller/usercontrollers/changePassword';
import dashboard from '../controller/usercontrollers/dashboard';
import { isAuthenticated, logout } from '../controller/usercontrollers/authenticate';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/changePassword', changePassword);
router.get('/authenticated', isAuthenticated);
router.post('/logout', logout);
router.get('/dashboard/:id', dashboard);
export default router;
