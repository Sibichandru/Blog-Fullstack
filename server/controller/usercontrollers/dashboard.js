import userModel from '../../model/userModel/user.model.js';

const dashboard = async (req,res)=>{
  const id = req.params.id;
  const user = await userModel.findById(id);
  return res.json(user);
};

export default dashboard;