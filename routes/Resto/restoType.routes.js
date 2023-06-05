const { check } = require("express-validator");
const { verifyToken, verifyRole } = require("../../middleware/auth.middleware");
const RestoTypeService=require("../../services/RestoType.service")
const router=require("express").Router();
router.post("/",verifyToken,verifyRole(["manager"]),
    check("type", "type is required").exists().isLength({ min: 3, max: 80 }),
    check("origin", "invalid origin provided").exists().isLength({ min: 2, max: 80 }),
    check("openingTime", "invalid opening time is provided").exists().isLength({min:2,max:10}),
    check("closingTime", "invalid closing time").exists().isLength({ min: 2, max: 10 }),
    check("image", "invalid phone is provided").exists(),
    async(req,res,next)=>{
        console.log("started this")
        // const { type, origin, telephone, ownerName, ownerTelephone } = req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.json({success:false,message:errors.array()})
        }
        return res.json({success:true,message:await RestoTypeService.createRestoType(req.body)})
    })
router.get("/",verifyToken,verifyRole(["client",'manager']),async(req,res,next)=>{
    const restos=await RestoTypeService.getRestoTypes()
    return res.json({success:true,message:restos})
})
router.get("/:id",verifyToken,verifyRole(["client","manager"]),async(req,res,next)=>{
    return res.json({success:true,message:await RestoTypeService.getRestoType(req.params.id)})
})
module.exports = router;