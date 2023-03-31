import {Sequelize, DataTypes} from "sequelize";

const sequelize = new Sequelize('sqlite::memory:');

const Product = sequelize.define('Product', {
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
    // Other model options go here
});
export default Product