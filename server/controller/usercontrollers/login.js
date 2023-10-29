// import bcrypt from "bcryptjs";
// import * as dotenv from 'dotenv'
// dotenv.config()
import 'dotenv/config';
import jwt from 'jsonwebtoken';
// eslint-disable-next-line import/extensions
import userModel from '../../model/userModel/user.model.js';

const login = async (req, res) => {
  const secret = process.env.SECRET;
  const { username, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.findOne({ username });
    const passOk = password === existingUser.password;
    if (passOk) {
      jwt.sign({ id: existingUser._id, username }, secret, {}, (err, token) => {
        if (err) throw err;
        return res.cookie('token', token, {
          httpOnly: true, path: '/', sameSite: 'none', secure: true,
        }).json('ok');
      });
    } else {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    console.log(error);
  }
};

export default login;
