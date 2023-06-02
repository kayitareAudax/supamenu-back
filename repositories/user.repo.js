const User = require("../models/User/User.model");

class UserRepo{
    static async createUser(user){
         const newUser=User.create(user)
         return newUser;
    }
    static async getUsers(){
        return User.find();
    }
    static async findUserByEmail(query){
        return User.findOne({email:query});
    }
    static async deleteUser(id){
        return User.findByIdAndDelete(id);
    }
    static async updateUser(id,data){
        return User.findByIdAndUpdate(id,data);
    }
    static async getUser(id){
        return User.findById(id);
    }
}
module.exports=UserRepo;