const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const userSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    telephone:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["client","manager"],
        default:"client"
    }
})
userSchema.pre('save', function preSave(next) {
  // assign the current object to plan variable
  const user = this;

  if (user.password === null) return next();

  // only hash the password if it has been modified (or is new)
  if (user.isModified('password') || user.isNew) {
    return bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      // hash the password using our new salt
      return bcrypt.hash(user.password, salt, (hasherr, hash) => {
        if (hasherr) return next(hasherr);
        user.password = hash;
        return next();
      });
    });
  }
  return next();
});
userSchema.methods.generateToken=()=>{
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn: 1 * 24 * 60 * 60
    })
}
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
  };
const User=mongoose.model('User.model',userSchema)
module.exports=User