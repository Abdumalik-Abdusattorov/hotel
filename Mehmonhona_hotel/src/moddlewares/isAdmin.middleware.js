const User = require("../models/user.model")
const { secret, verify } = require("../utils/jwt");

const isAdmin=async(req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token)
        return res.status(401).json({message:"Invalit token"});
    verify(token,async(err,data)=>{
        if(err)
            return res.status(401).json({message:"Invalit token"});
        if(!data.isAdmin)
            return res.status(401).json({message:"faqat admin"})
        const user = await User.findById(data.id);
        req.use=user;
        next();
    })

};

module.exports ={isAdmin}