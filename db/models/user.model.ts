import {Sequelize, DataTypes} from "sequelize";
import {Model} from "./abstracts/model";

export class UserModel extends Model {
    init(sequelize, relations = null) {
        return this.instanceModel(
            sequelize,
            'User',
            {
                // Model attributes are defined here
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: true
                    }
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            'user',
            relations
        )
    }

}