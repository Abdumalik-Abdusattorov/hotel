const User = require("../models/user.model")

const userUpdate = async(req,res)=>{
    try {
        const {id}=req.params;

        const userUpdated=await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({message:"Succes User",data:userUpdated});
        
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};

const userDelete = async (req,res)=>{
    try {
        const{id}=req.params;
        await User.findByIdAndDelete(id)
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};

const userFind = async(req,res)=>{
    try {
        const{id} = req.params;
        const user= await User.findById(id)
        res.status(200).json({message:user});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};
const userFindall= async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json({message:users});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

module.exports = {
    userUpdate,
    userDelete,
    userFind,
    userFindall,
}