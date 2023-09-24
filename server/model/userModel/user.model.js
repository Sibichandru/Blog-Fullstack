import mongoose from 'mongoose';

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
    minlength: 5,
  },
  post:[{
    type:mongoose.Types.ObjectId,
    ref:'post',
    required :'false'
  }],
  likedPosts:[{
    type:mongoose.Types.ObjectId,
    ref:'post',
    required :'false'
  }]
});

export default mongoose.model('user',userSchema);