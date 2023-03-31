import {Sequelize, DataTypes} from "sequelize";

export class ProductModel {
    init(sequelize) {
        var model = sequelize.define('Product', {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            freezeTableName: true,
            tableName: 'product'
        });

        return model;
    }
}