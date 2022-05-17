const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPw) {
    //async version may be usable here as well
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    //id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
        isEmail: true,
      },
    },
    //password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //must be at least 4 characters long
        len: [4],
      },
    },
  },
  {
    //these function will fire before creation of a user AND during an update on user data
    hooks: {
      //hashes password on creation
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      //hashes new password upon edit
      async beforeUpdate(updatedUserData) {
        updatedUserData = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },

    //direct connection to db
    sequelize,
    //no automatic creation of "createdAt/updatedAt" timestamps
    timestamps: false,
    //no automatic pluralization of table names
    freezeTableName: true,
    //use underscores instead of camelcasing
    underscored: true,
    //lowercase model name within db
    modelName: "user",
  }
);

module.exports = User;
