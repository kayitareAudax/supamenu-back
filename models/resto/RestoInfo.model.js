const mongoose=require("mongoose")
const RestoInfoSchema=mongoose.Schema({
    name:String,
    completeName:String,
    telephone:String,
    ownerName:String,
    ownerTelephone:String
})
const RestoInfo=mongoose.model('RestoInfo.model',RestoInfoSchema);
module.exports=RestoInfo;