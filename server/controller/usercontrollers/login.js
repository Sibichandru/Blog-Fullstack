/*
	Implement hashed password using bcrypt
	Provide JWT token for Authentication
	Implement email/username login
*/ 

import bcrypt from "bcryptjs";
import userModel from "../../model/userModel/user.model.js";

const login = async (req, res, next) => {
  const { username, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.findOne({ username });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    console.log("no user found");
    return res.status(404).json({ message: "No User Found!" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    console.log("password incorrect");
    return res.status(400).json({ message: "password invalid" });
  }
  return res.status(200).json({ message: "Login Successful" });
};

export default login;
