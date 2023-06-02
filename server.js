const express=require("express");
const app=express()
const dotenv=require("dotenv");
dotenv.config();
const routes=require("./routes")
const PORT=process.env.PORT || 5000;
const dbConn=require("./config/dbConn");
app.use(express.json())
app.listen(PORT,()=>{
    console.log('Server listening on port '+PORT);
})
//routes;
app.use("/",routes);