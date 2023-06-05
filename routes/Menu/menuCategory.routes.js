const { validationResult,check } = require("express-validator");
const { verifyToken, verifyRole } = require("../../middleware/auth.middleware");
const MenuService = require("../../services/menu.service");

const router = require("express").Router();
router.post("/", verifyToken, verifyRole(["manager"]),
    check("name", "invalid name provided").exists().isLength({ min: 2, max: 80 }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({success:false,message:errors.array()})
        }
        return res.json({success:true,message:await MenuService.createMenuCategory(req.body)})
    })
    router.get("/",verifyToken,verifyRole(["client",'manager']),async(req,res,next)=>{
        const menuCategories=await MenuService.getMenuCategories()
        return res.json({success:true,message:menuCategories})
    })
    router.get("/:id",verifyToken,verifyRole(["client","manager"]),async(req,res,next)=>{
        return res.json({success:true,message:await MenuService.getMenuCategory(req.params.id)})
    })
module.exports=router;