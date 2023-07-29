import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name:{
		type: 'string',
		required: true,
	},
	email:{
		type: 'string',
		required: true,
	},
	username:{
		type: 'string',
		required: true,
		unique:true,
	},
	password:{
		type:'string',
		required: true,
		minlength: 8,
	},
	blogs:[{
		type:mongoose.Types.ObjectId,
		ref:'blog',
		required :'false'
	}]
});

export default mongoose.model("user",userSchema);