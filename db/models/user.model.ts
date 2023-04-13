import {Sequelize, DataTypes} from "sequelize";
import {Model} from "./abstracts/model";
import bcrypt from "bcrypt";

const passwordSalt = parseInt(process.env.PASSWORD_SALT)

export class UserModel extends Model {
    init(sequelize, relations = null) {
        var schema = this.instanceModel(
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
            relations,
            {
                beforeCreate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(passwordSalt, 'a');
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
                beforeUpdate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(passwordSalt, 'a');
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                }
            },
            {
                validPassword: (password, payloadPassword) => {
                    return bcrypt.compareSync(password, payloadPassword);
                }
            }
        );
        schema.prototype.validPassword = async (password, hash) => {
            return await bcrypt.compareSync(password, hash);
        }
        return schema;
    }

}