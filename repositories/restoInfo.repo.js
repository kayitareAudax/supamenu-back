const RestoInfo=require("../models/resto/RestoInfo.model")
class RestoInfoRepo{
    static async createRestoInfo(restoInfo){
        await RestoInfo.create(restoInfo);
    }
    static async getRestoInfo(id){
        await RestoInfo.find(id)
    }
    static async getRestosInfo(){
        await RestoInfo.find();
    }
    static async deleteRestoInfo(id){
        await RestoInfo.findByIdAndDelete(id);
    }
}
module.exports=RestoInfoRepo;