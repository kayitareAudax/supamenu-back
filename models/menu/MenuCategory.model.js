const mongoose=require("mongoose")
const MenuCategorySchema=mongoose.Schema({
    name:String,
})
const MenuCategory=mongoose.model('menuCategory',MenuCategorySchema);
module.exports=MenuCategory;