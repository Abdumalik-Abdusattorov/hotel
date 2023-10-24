const {Schema, model} =require("mongoose")

const schema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        maxPeople:{
            type:Number,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        roomnumbers:[{number:Number,unavailableDates:[{type:Date}] }],
    },
    {timestamps:true}
);

module.exports = model("Room",schema);