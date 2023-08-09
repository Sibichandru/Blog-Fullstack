import userModel from "../../model/userModel/user.model";

export const userDetail = async (req,res)=>{
	const username = req.body;
	try {
		let user = userModel.findOne({username});
	} catch (error) {
		console.log(error);
	}
}