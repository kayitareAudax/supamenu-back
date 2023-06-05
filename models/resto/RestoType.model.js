const mongoose=require("mongoose");
const RestoTypeSchema=new mongoose.Schema({
    type:{
        type:String,
        enum:['coffeshop','restaurant','pub','hotel'],
        default:'restaurant'
    },
    origin:String,
    openingTime:String,
    closingTime:String,
    image:String
})
const RestoType=mongoose.model('RestoType',RestoTypeSchema);
module.exports=RestoType;