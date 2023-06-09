import {Sequelize, DataTypes} from "sequelize";
import {Model} from "./abstracts/model";

export class ProductModel extends Model {
    init(sequelize, relations = null) {
        return this.instanceModel(
            sequelize,
            'Product',
            {
                // Model attributes are defined here
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                rating: {
                    type: DataTypes.INTEGER
                },
                img_url: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                price: {
                    type: DataTypes.DOUBLE,
                    allowNull: false
                }
            },
            'product',
            relations
        )
    }

}