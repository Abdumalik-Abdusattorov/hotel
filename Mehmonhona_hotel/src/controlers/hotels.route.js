const Hotel = require("../models/hotel.model")

const hotelCreate = async (req,res)=>{
    try {
    const{name,type,city,address,distance,title,description,cheapestPrice} = req.body;
    
    const newHotel = await Hotel.create({name,type,city,address,distance,title,description,cheapestPrice});

    res.status(200).json({message:"Succes Hotel",newHotel});
        
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};


const hotelUpdate = async(req,res)=>{
    try {
        const {id}=req.params;

        const hotelUpdated=await Hotel.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({message:"Succes Hotel",data:hotelUpdated});
        
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};

const hotelDelete = async (req,res)=>{
    try {
        const{id}=req.params;
        await Hotel.findByIdAndDelete(id)
        res.status(200).json({message:"Deleted"});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};

const hotelFind = async(req,res)=>{
    try {
        const{id} = req.params;
        const hotel= await Hotel.findById(id)
        res.status(200).json({message:hotel});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
};
const hotelFindall= async (req,res)=>{
    try {
        const hotels = await Hotel.find(req.query);
        res.status(200).json({message:hotels});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}
const countByCity= async (req,res)=>{
    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
         
        res.status(200).json({list});
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}
const countByType= async (req,res)=>{
   try{
    const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const apartmentCount = await Hotel.countDocuments({type:"apartment"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const cabinCount = await Hotel.countDocuments({type:"cabin"})
    const villaCount = await Hotel.countDocuments({type:"villa"})
         
        res.status(200).json([
            {type:"hotel",conut:hotelCount},
            {type:"apartments",conut:apartmentCount},
            {type:"resorts",conut:resortCount},
            {type:"cabins",conut:cabinCount},
            {type:"villas",conut:villaCount},
        ]);
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

module.exports ={
    hotelCreate,
    hotelUpdate,
    hotelDelete,
    hotelFind,
    hotelFindall,
    countByCity,
    countByType,
}