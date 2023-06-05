const router=require("express").Router();
router.use("/auth",require("../routes/User/index"));
router.use("/",require("./Resto"))
router.use("/menu",require("./Menu"));
module.exports=router;