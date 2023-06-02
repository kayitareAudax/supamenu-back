const router = require("express").Router();
const { findUser, createUser, getUsers } = require('../../services/user.service')
// const auth=require("../../middleware/auth.middleware")
const { check, validationResult } = require("express-validator");
const verifyToken = require("../../middleware/auth.middleware");
router.post('/login', check("email", "invalid email is provided").exists().isEmail(),
    check("password", "invalid password").exists().isLength({ min: 6, max: 20 }), async (req, res, next) => {
        const {email,password}=req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.json({success:false,message:errors.array()})
        }
        const user=await findUser(email);
        if(!user){
            return res.json({success:false,message:"invalid credentials"});
        }
        console.log(user);
        //compare password;
        const passwordValid=await user.comparePassword(password);
        if(!passwordValid){
            return res.json({success:false,message:"Invalid credentials"});
        }
        return res.json({success:true,message:user.generateToken()})

    })
router.post('/signup',
    check("firstName", "firstname is required").exists().isLength({ min: 3, max: 80 }),
    check("lastName", "lastName is required").exists().isLength({ min: 2, max: 80 }),
    check("email", "invalid email is provided").exists().isEmail(),
    check("password", "invalid password").exists().isLength({ min: 6, max: 20 }),
    check("telephone", "invalid phone is provided").exists().isMobilePhone('en-RW'),
    async (req, res, next) => {
        // console.log(req)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ success: false, message: errors.array() })
        }
        const { firstName, lastName, email, password, telephone } = req.body;
        const user = await findUser(email);
        if (user) {
            return res.json({ success: false, message: "user already exists" });
        }
        const newUser = await createUser(req.body);
        return res.json({ success: true, message: newUser.generateToken() });
    })
    router.get('/dashboard',verifyToken,async(req,res,next)=>{
        res.send("hey there")
    })
module.exports = router;