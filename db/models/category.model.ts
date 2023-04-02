import {Sequelize, DataTypes} from "sequelize";
import {Model} from "./abstracts/model";

export class CategoryModel extends Model {
    init(sequelize, relations) {
        return this.instanceModel(
            sequelize,
            'Category',
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
                identifier: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            'category',
            relations
        );
    }
}