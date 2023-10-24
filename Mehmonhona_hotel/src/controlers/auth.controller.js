const Users = require("../models/user.model");
const bcrypt = require("bcrypt");
const { sign } = require("../utils/jwt");

const register = async(req,res)=>{
    try {
        const{username,email,password} = req.body;
        const find = await Users.findOne({username});
        if(find)
            return res.status(403).json({message:"User alrady exis"});
        
    const hashedPas = await bcrypt.hash(password,7);
    const newUser = await Users.create({username,email,password:hashedPas});

        res.status(200).json({message:"Success",data:newUser});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

const login = async(req,res)=>{
    try {
        const {username,password}=req.body;

        const userFind =await Users.findOne({username});
        if(!userFind)
            return res.status(403).json({message:"User yoq"});

        const compare = await bcrypt.compare(password,userFind.password);
        if(!compare)
            return res.status(403).json({message:"password yoq"});
        const token = await sign({id:userFind.id,isAdmin:userFind.isAdmin});
        
        res.cookie("access_token",token,{httpOnly:true}).status(201).json({message:"succes",data:token});
    } catch (error) {
        console.log(error.message);
        res.status(403).json({message:"Error login"});
    }
}
module.exports = {
    register,
    login,
}