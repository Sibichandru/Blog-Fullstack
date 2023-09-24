import jwt from 'jsonwebtoken';

import postModel from '../../model/postModel/post.model.js';
import userModel from '../../model/userModel/user.model.js';

export const like = async (req, res) => {
  const id = req.body.id;
  let likes = req.body.likes + 1;
  let cookieUser;
  const token = req.cookies;
  jwt.verify(token.token, process.env.SECRET, (err, user) => {
    if (err)
      return res.status(401).json({
        ok: false,
        message: 'Authentication token is not valid.',
      });
    else cookieUser = user.id;
  });
  const userinfo = await userModel.find({ _id: cookieUser });
  let lp = userinfo[0].likedPosts;
  console.log(lp);
  const isliked = lp.includes(id);
  console.log(isliked);
  try {
    if (isliked) {
      return res.status(201).json('already liked bitch');
    } else {
      await postModel.updateOne({ _id: id }, { likes: likes });
      lp.push(id);
      await userModel.updateOne({ _id: cookieUser }, { likedPosts: lp });
      res.status(200).json('ok');
    }
  } catch (error) {
    res.status(301).json('fail');
  }
};
export const unlike = async (req, res) => {
  const id = req.body.id;
  let likes = req.body.likes - 1;
  try {
    await postModel.updateOne({ _id: id }, { likes: likes });
    res.status(200).json('ok');
  } catch (error) {
    res.status(301).json('fail');
  }
};
