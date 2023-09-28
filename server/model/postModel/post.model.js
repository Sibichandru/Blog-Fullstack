import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  caption: {
    type: 'string',
    required: true,
    default: 'no caption',
  },
  image: {
    type: 'string',
    required: true,
  },
  likes: {
    type: 'number',
    default: 0,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likedUsers: [{
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  }],
});

export default mongoose.model('post', postSchema);
