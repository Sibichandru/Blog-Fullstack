import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  caption: {
    type: "string",
    required: true,
    default:'no caption'
  },
  image: {
    type: "string",
    required: true,
  },
  likes: {
    type: "number",
    default: 1,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default mongoose.model("post", postSchema);
