
const RestoTypeRepo = require("../repositories/restoType.repo");

class RestoTypeService{
    static async createRestoType(data){
        return RestoTypeRepo.createRestoType(data);
    }
    static async getRestoTypes(){
        return RestoTypeRepo.getRestosType()
    }
    static async getRestoType(id){
        return RestoTypeRepo.getRestoType(id);
    }
    static updateRestoType(id){
        return RestoTypeRepo.updateRestoType(id);
    }
}
module.exports=RestoTypeService;
