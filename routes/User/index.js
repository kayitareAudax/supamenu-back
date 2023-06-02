const router=require("express").Router();
router.use('/',require('./user.routes'));
module.exports=router;