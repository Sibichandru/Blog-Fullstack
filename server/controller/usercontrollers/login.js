/*
	Implement hashed password using bcrypt
	Provide JWT token for Authentication
	Implement email/username login
*/

import bcrypt from 'bcryptjs'
import userModel from '../../model/userModel/user.model.js'

const login = async (req,res,next)=>{
	const {username,password} = req.body;
	console.log(username,password);
	// let existingUser;
	try {
		existingUser = await userModel.findOne({username});
	} catch (error) {
		return res.status(404).json({message:"user not found"});
	}
	try {
		if(password == existingUser.password){
			console.log("success");
		}else{
			console.log("incorrect password");
		}
	} catch (error) {
		return console.log(error);
	}
}

export default login;
