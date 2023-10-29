import 'dotenv/config';
// eslint-disable-next-line import/extensions
import userModel from '../../model/userModel/user.model.js';

const changePassword = async (req, res) => {
  const { username, oldPassword, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.findOne({ username });
    const passOk = password === existingUser.password;
    if (passOk) {
      await userModel.updateOne({ username }, { password: oldPassword });
      return res.status(200).json({ message: 'changed' });
    }
    return res.status(402).json({ message: 'Failed' });
  } catch (error) {
    return console.log(error);
  }
};

export default changePassword;
