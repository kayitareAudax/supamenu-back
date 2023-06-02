const jwt = require("jsonwebtoken");

const verifyToken=async(req,res,next)=>{
    let token;
   if(req.headers && req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token=req.headers.authorization.split(' ')[1];
   }
   if(!token){
    return res.json({success:false,message:"you are not authorized to access this route"})
   }
   const decoded=await jwt.verify(token,process.env.JWT_SECRET);
   req.user=decoded;
   next()
}
module.exports=verifyToken;