
const RestoInfoRepo = require("../repositories/restoInfo.repo");

class RestoInfoService{
    static async createRestoInfo(data){
        return RestoInfoRepo.createRestoInfo(data);
    }
    static async getRestoInfos(){
        return RestoInfoRepo.getRestosInfo()
    }
    static async getRestoInfo(id){
        return RestoInfoRepo.getRestoInfo(id);
    }
    static updateRestoInfo(id){
        return RestoInfoRepo.updateRestoInfo(id);
    }
}
module.exports=RestoInfoService;
