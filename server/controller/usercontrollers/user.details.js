import userModel from "../../model/userModel/user.model.js";

export const userDetail = async (req,res)=>{
	const username = req.params.username;
	console.log(username);
	try {
		let user = userModel.findOne(username);
		console.log(user.id);
		return res.status(200).json(user.username);
	} catch (error) {
		console.log(error);
	}
}