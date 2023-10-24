const {Schema, model} =require("mongoose")

const schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },        
        distance:{
            type:String,

        },
        photos:{
            type:[String]
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            min:0,
            max:5,
        },
        rooms:{
            type:[String],
        },
        cheapestPrice:{
            type:Number,
        },
        featured:{
            type:Boolean,
            deafault:false
        },
    }
);

module.exports = model("Hotel",schema);