const RestoType = require("../models/resto/RestoType.model");

class RestoTypeRepo{
    static async createRestoType(restoType){
        return RestoType.create(restoType);
    }
    static async getRestoType(id){
        return RestoType.findById(id)
    }
    static async getRestosType(){
        return RestoType.find();
    }
    static async deleteRestoType(id){
        await RestoType.findByIdAndDelete(id);
    }
    static async updateRestoType(id,data){
        await RestoType.findByIdAndUpdate(id,data);
    }
}
module.exports=RestoTypeRepo;