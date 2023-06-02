const {createUser,getUsers,updateUser,deleteUser,findUserByEmail,getUser} = require("../repositories/user.repo");

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
    static async getUser(id){
        return getUser(id);
    }
}
module.exports=UserService;