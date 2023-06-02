const mongoose=require("mongoose");
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  };
module.exports=mongoose.connect(process.env.MONGO_URL,mongodbOptions).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
