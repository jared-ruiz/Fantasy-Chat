const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        //id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                //all emails must be unique. No duplicates
                isEmail: true
            }
        },
        //password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //must be at least 4 characters long
                len: [4]
            }
        }    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;