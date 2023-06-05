const router=require("express").Router();
router.use("/",require("./menu.routes"))
router.use("/menuCatgory",require("./menuCategory.routes"));
module.exports=router;