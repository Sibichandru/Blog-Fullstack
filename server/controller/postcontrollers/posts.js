import postModel from '../../model/postModel/post.model.js'

export const posts = async(req,res,next)=>{
	const posts = await postModel.find();
	// console.log(posts);
	res.json(posts)
}