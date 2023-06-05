const mongoose=require("mongoose")
const MenuSchema=mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    name:String,
    price:Number,
    ingredients:String,
    image:String
})
const Menu=mongoose.model('menu',MenuSchema);
module.exports=Menu;