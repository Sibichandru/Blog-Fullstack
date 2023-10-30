import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res) => {
  const token = req.cookies;
  if (!token) {
    return res.json({
      ok: false,
      message: 'Authentication token was not provided.',
    }).status(401);
  }
  jwt.verify(token.token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        message: 'Authentication token is not valid.',
      });
    }
    return res.status(200).json(user);
  });
  return res.status(500).json('server error');
};

export const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true, path: '/', sameSite: 'none', secure: true,
  }).json('ok');
};
