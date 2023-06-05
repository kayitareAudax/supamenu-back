const RestoInfo=require("../models/resto/RestoInfo.model")
class RestoInfoRepo{
    static async createRestoInfo(restoInfo){
        return RestoInfo.create(restoInfo);
    }
    static async getRestoInfo(id){
        return RestoInfo.findById(id)
    }
    static async getRestosInfo(){
        return RestoInfo.find();
    }
    static async deleteRestoInfo(id){
        await RestoInfo.findByIdAndDelete(id);
    }
    static async updateRestoInfo(id,data){
        await RestoInfo.findByIdAndUpdate(id,data);
    }
}
module.exports=RestoInfoRepo;