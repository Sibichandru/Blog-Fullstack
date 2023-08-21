import jwt from "jsonwebtoken";

const isAuthenticated = (req, res)=>{
	// jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	// 	if (err) return res.sendStatus(403);
	// 	req.user = user;
	// 	next();
	// });
// console.log(req);
}

export default isAuthenticated