const router=require("express").Router();
router.use("/auth",require("../routes/User/index"));
module.exports=router;