import jwt from "jsonwebtoken";

// export const isAuthenticated = (req, res)=>{
// 	// console.log(req.cookies)
// 	// if(req.cookies.token == ""){
// 	// 	// console.log(1);
// 	// 	return res.status(403);
// 	// }else
// 	{
// 		jwt.verify(req.cookies.token, process.env.SECRET, (err,user) => {
// 			if (err) return res.status(403);
// 			res.json(user).status(200);
// 		});
// 	}
// }

export const isAuthenticated = (req, res)=>{
	{
			const token = req.cookies;

			if(!token) {
					return res.json({
							ok: false,
							message: 'Authentication token was not provided.'
					}).status(401); // Unauthorized
			}

			jwt.verify(token.token, process.env.SECRET, (err,user) => {
					if (err) return res.status(403);
					res.json(user).status(200);
			});
	}
}
 
export const logout = (req,res)=>{
	return res.cookie('token',"",{httpOnly:true,path:'/',sameSite:'none',secure:true}).json('ok')
}

