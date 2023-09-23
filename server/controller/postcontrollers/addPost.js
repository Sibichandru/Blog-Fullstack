import fs from 'fs'
import postModel from "../../model/postModel/post.model.js";
import jwt from "jsonwebtoken";
export const addPost = async (req, res) => {
	let cookieUser;
	const token = req.cookies;
	 jwt.verify(token.token, process.env.SECRET, (err,user) => {
		if (err) return res.status(401).json({
				ok: false,
				message: 'Authentication token is not valid.'
		});
		else cookieUser = user;
});
	// console.log(req.file);
	const {originalname,path} = req.file;
	const parts = originalname.split('.');
	const ext = parts[parts.length-1];
	const image = path+'.'+ext;
	fs.renameSync(path,image);

	const {caption} = req.body;
	const author = cookieUser.id;
	await postModel.create({
		caption,
		image:image,
		author
	})
	res.json('ok');
};

