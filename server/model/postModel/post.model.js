import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
	caption:{
		type:'string',
		required:false
	},
	image:{
		type:'buffer',
		required:true
	},
	time:{
		type:'string',
		required:true,
	},
	author:{
		type:mongoose.Types.ObjectId,
		ref:'user',
		required:true,
	}

});

export default mongoose.model("post",postSchema);