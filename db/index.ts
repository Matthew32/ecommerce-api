import dbConfig from "./config/db.config";
import {Sequelize} from "sequelize";
import {ProductModel} from "./models/product.model"
import {CategoryModel} from "./models/category.model"
import {UserModel} from "./models/user.model"

import {Model} from "./models/abstracts/model";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'mysql'
});
let userModel = (new UserModel()).init(sequelize);

let productModel = (new ProductModel()).init(sequelize);

const categoryModel = (new CategoryModel()).init(
    sequelize,
    {
        belongsToMany: [{
            model: productModel,
            tableName: 'product_category',
            foreignKey: 'categoryId'
        }]
    }
);
export default {
    Sequelize: sequelize,
    productModel: productModel,
    categoryModel: categoryModel,
    userModel: userModel
};
