const Menu=require("../models/menu/Menu.model")
const MenuCategory=require("../models/menu/MenuCategory.model")
class MenuRepo{
    static async createMenu(menu){
        return Menu.create(menu);
    }
    static async getMenu(id){
        return Menu.find(id)
    }
    static async getMenus(){
        return Menu.find();
    }
    static async deleteMenu(id){
        await Menu.findByIdAndDelete(id);
    }
    static async updateMenu(id,data){
        await Menu.findByIdAndUpdate(id,data);
    }
    static async createMenuCategory(data){
        return MenuCategory.create(data);
    }
    static async getMenuCategories(){
        return MenuCategory.find();
    }
    static async getMenuCategory(id){
        return MenuCategory.findById(id);
    }
}
module.exports=MenuRepo;