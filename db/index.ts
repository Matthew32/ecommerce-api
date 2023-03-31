import dbConfig from "./config/db.config";
import {Sequelize} from "sequelize";
import {ProductModel} from "./models/product.model"

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'mysql'
});
const productModel = (new ProductModel()).init(sequelize);

export default {
    Sequelize: sequelize,
    productModel: productModel
};
