const { verifyToken, verifyRole } = require("../../middleware/auth.middleware");
const { check, validationResult } = require("express-validator");
const RestoInfoService = require("../../services/restoInfo.service");
const router = require("express").Router();
router.post("/", verifyToken, verifyRole(["manager"]),
    check("name", "name is required").exists().isLength({ min: 3, max: 80 }),
    check("completeName", "lastName is required").exists().isLength({ min: 2, max: 80 }),
    check("telephone", "invalid phone is provided").exists().isMobilePhone('en-RW'),
    check("ownerName", "invalid password").exists().isLength({ min: 6, max: 80 }),
    check("ownerTelephone", "invalid phone is provided").exists().isMobilePhone('en-RW'),
    async(req, res, next) => {
        console.log("started this")
        const { name, completeName, telephone, ownerName, ownerTelephone } = req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.json({success:false,message:errors.array()})
        }
        return res.json({success:true,message:await RestoInfoService.createRestoInfo(req.body)})
    })
router.get("/",verifyToken,verifyRole(["client",'manager']),async(req,res,next)=>{
    const restos=await RestoInfoService.getRestoInfos()
    return res.json({success:true,message:restos})
})
router.get("/:id",verifyToken,verifyRole(["client","manager"]),async(req,res,next)=>{
    return res.json({success:true,message:await RestoInfoService.getRestoInfo(req.params.id)})
})
module.exports = router;