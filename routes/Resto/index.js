const router=require("express").Router();
router.use("/restoInfo",require("./restoInfo.routes"))
router.use("/restoType",require("./restoType.routes"))
module.exports=router;