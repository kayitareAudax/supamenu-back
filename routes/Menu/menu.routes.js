const { validationResult,check } = require("express-validator");
const { verifyToken, verifyRole } = require("../../middleware/auth.middleware");
const MenuService = require("../../services/menu.service");

const router = require("express").Router();
router.post("/", verifyToken, verifyRole(["manager"]),
    check("category", "category is required").exists(),
    check("name", "invalid name provided").exists().isLength({ min: 2, max: 80 }),
    check("price", "provide price of menu").exists(),
    check("ingredients", "provide a list of ingredients").exists().isArray(),
    check("image", "invalid phone is provided").exists(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({success:false,message:errors.array()})
        }
        return res.json({success:true,message:await MenuService.createMenu(req.body)})
    })
    router.get("/",verifyToken,verifyRole(["client",'manager']),async(req,res,next)=>{
        const menus=await MenuService.getMenus()
        return res.json({success:true,message:menus})
    })
    router.get("/:id",verifyToken,verifyRole(["client","manager"]),async(req,res,next)=>{
        return res.json({success:true,message:await MenuService.getMenu(req.params.id)})
    })
module.exports=router;