/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken';

import postModel from '../../model/postModel/post.model.js';
import userModel from '../../model/userModel/user.model.js';

export const like = async (req, res) => {
  const { id } = req.body;
  const likes = req.body.likes + 1;
  let cookieUser;
  const token = req.cookies;
  jwt.verify(token.token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        message: 'Authentication token is not valid.',
      });
    }
    cookieUser = user.id;
    return user;
  });
  const userinfo = await userModel.find({ _id: cookieUser });
  const likedpost = userinfo[0].likedPosts;
  const postinfo = await postModel.find({ _id: id });
  const likedUser = postinfo[0].likedUsers;
  const isliked = likedpost.includes(id);
  try {
    if (isliked) {
      return res.status(201).json('already liked');
    }
    await postModel.updateOne({ _id: id }, { likes });
    likedUser.push(cookieUser);
    await postModel.updateOne({ _id: id }, { likedUsers: likedUser });
    likedpost.push(id);
    await userModel.updateOne({ _id: cookieUser }, { likedPosts: likedpost });
    return res.status(200).json('ok');
  } catch (error) {
    return res.status(301).json('fail');
  }
};

export const unlike = async (req, res) => {
  const { id } = req.body;
  const likes = req.body.likes - 1;
  const token = req.cookies;
  let cookieUser;
  jwt.verify(token.token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        message: 'Authentication token is not valid.',
      });
    }
    cookieUser = user.id;
    return user;
  });
  const userinfo = await userModel.find({ _id: cookieUser });
  const likedpost = userinfo[0].likedPosts;
  const postinfo = await postModel.find({ _id: id });
  const likedUser = postinfo[0].likedUsers;
  const isliked = likedpost.includes(id);
  try {
    if (isliked) {
      await postModel.updateOne({ _id: id }, { likes });
      likedUser.pop(cookieUser);
      await postModel.updateOne({ _id: id }, { likedUsers: likedUser });
      likedpost.pop(id);
      await userModel.updateOne({ _id: cookieUser }, { likedPosts: likedpost });
      return res.status(200).json('ok');
    }
    return res.status(201).json('no need to unlike');
  } catch (error) {
    return res.status(301).json('fail');
  }
};
