const router=require("express").Router();
router.use("/auth",require("../routes/User/index"));
router.use("/restoInfo",require("./Resto/restoInfo.routes"))
module.exports=router;