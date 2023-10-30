import userModel from '../../model/userModel/user.model';
// import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  const {
    name, username, email, password,
  } = req.body;
  let existingUser; let
    existingUserName;
  try {
    existingUser = await userModel.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    return res
      .status(404)
      .json({ message: 'Already registered,Want to login' });
  }
  existingUserName = await userModel.findOne({ username });
  if (existingUserName) {
    return res.status(404).json({ message: 'Try different Username' });
  }
  const user = new userModel({
    name,
    email,
    username,
    password,
    blogs: [],
  });
  try {
    await user.save();
    return res
      .status(200)
      .json({ message: 'success,redirecting to login' });
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong' });
  }
};

export default signup;
