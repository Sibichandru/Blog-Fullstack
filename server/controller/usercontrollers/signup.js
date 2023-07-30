const signup = async (req,res,next)=>{
	const {name,username,email,password} = req.body;
	// let existingUser,existingUserName;
	try {
		let existingUser = await userModel.findOne({email});
		let existingUserName = await userModel.findOne({username});
	} catch (error) {
		return res.status(404).json({message:"user not found"});
	}
	
	
}

export default signup;
