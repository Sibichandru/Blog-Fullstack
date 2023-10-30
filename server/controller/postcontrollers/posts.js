import fs from 'fs';
import jwt from 'jsonwebtoken';
import postModel from '../../model/postModel/post.model';

export const addPost = async (req, res) => {
  let cookieUser;
  const token = req.cookies;
  jwt.verify(token.token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        message: 'Authentication token is not valid.',
      });
    }
    cookieUser = user;
  });
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const image = `${path}.${ext}`;
  fs.renameSync(path, image);
  const { caption } = req.body;
  const author = cookieUser.id;
  await postModel.create({
    caption,
    image,
    author,
  });
  res.json('ok');
};

export const posts = async (req, res) => {
  const loadPosts = await postModel.find().populate('author', ['username']);
  res.json(loadPosts);
};
