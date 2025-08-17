import jwt from 'jsonwebtoken'

const userAuth=(req,res,next)=>{

   try {
     const authHeader=req.headers["authorization"];
     const token= authHeader && authHeader.split(" ")[1]
     if(!token){
         return res.status(401).json({success:false,message:"Invalid session"})
     }
 
     const decoded=jwt.verify(token,process.env.JWT_SECRET)
 
     req.user=decoded;
     next();
   } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid or expired token!" ,error:error.message});
   }

};

export default userAuth