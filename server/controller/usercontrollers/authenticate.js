import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res)=>{
	jwt.verify(req.cookies.token, process.env.SECRET, (err,user) => {
		if (err) return res.status(403);
		res.json(user).status(200);
	});
}
 
export const logout = (req,res)=>{
	return res.cookie('token',"",{httpOnly:true,path:'/',sameSite:'none',secure:true}).json('ok')
}
