const {createUser,getUsers,updateUser,deleteUser,findUserByEmail} = require("../repositories/user.repo");

class UserService{
    static async createUser(user){
        return  createUser(user);
    }
    static async findUser(query){
        return findUserByEmail(query);
    }
    static async getUsers(){
        return  getUsers();
    }
}
module.exports=UserService;