import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title:{
		type:'string',
		required: true,
	},
	description:{
		type:'string',
		required:true
	},
	content:{
		type:'string',
		required:true,
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

export default mongoose.model("blog",blogSchema);