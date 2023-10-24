const Room = require("../models/room.model");
const Hotel = require("../models/hotel.model");

const createRoom = async(req,res)=>{
    const hotelId = req.params.id
    const newRoom = new Room(req.body)
    try {
        const room = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:room._id}})
            
        } catch (error) {
        return res.status(402).json({message:error.message})
            
        }
        res.status(200).json({message:room});
        console.log(newRoom);
    } catch (error) {
        return res.status(402).json({message:error.message})
    }
};


const roomUpdate = async(req,res)=>{
    try {
        const {id}=req.params;

        const roomUpdated=await Hotel.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({message:"Succes Hotel",data:roomUpdated});
        
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};

const roomDelete = async (req,res)=>{
    try {
        const{id}=req.params;
        await Room.findByIdAndDelete(id)
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};

const roomFind = async(req,res)=>{
    try {
        const{id} = req.params;
        const room= await Room.findById(id)
        res.status(200).json({message:room});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};
const roomFindall= async (req,res)=>{
    try {
        const rooms = await Room.find();
        res.status(200).json({message:rooms});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

module.exports ={
    createRoom,
    roomFind,
    roomFindall,
    roomUpdate,
    roomDelete,
}