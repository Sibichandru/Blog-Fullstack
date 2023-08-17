import userModel from "../../model/userModel/user.model.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  const { name, username, email, password } = req.body;
  let existingUser, existingUserName;
  try {
    existingUser = await userModel.findOne({ email });
    // console.log(existingUserName);
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    console.log('user already in the DB');
    return res
      .status(404)
      .json({ message: "Already registered,Want to login" });
  } else {
    existingUserName = await userModel.findOne({ username });
    if (existingUserName) {
      console.log("existing name");
      return res.status(404).json({ message: "Try different Username" });
    } else {
      let hashedPass = await bcrypt.hashSync(password, 20);
      const user = new userModel({
        name,
        email,
        username,
        password: hashedPass,
        blogs: [],
      });
      try {
        await user.save();
        console.log("success");
        return res
          .status(200)
          .json({ message: "success,redirecting to login" });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "something went wrong" });
      }
    }
  }
};

export default signup;
