
const MenuRepo = require("../repositories/menu.repo");

class MenuService{
    static async createMenu(data){
        return MenuRepo.createMenu(data);
    }
    static async getMenus(){
        return MenuRepo.getMenus()
    }
    static async getMenu(id){
        return MenuRepo.getMenu(id);
    }
    static updateMenu(id){
        return MenuRepo.updateMenu(id);
    }
    static async getMenuCategories(){
        return MenuRepo.getMenuCategories();
    }
    static async getMenuCategory(id){
        return MenuRepo.getMenuCategory(id);
    }
    static async createMenuCategory(data){
        return MenuRepo.createMenuCategory(data)
    }
}
module.exports=MenuService;
