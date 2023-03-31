import  dbConfig from "./config/db.config";
import {Sequelize} from "sequelize";
import ProductModel from "./models/product.model"
const dbDialect = "mysql";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbDialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

export default {
    Sequelize : sequelize,
    productModel : ProductModel
};
