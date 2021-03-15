const { DataTypes, Model } = require("sequelize");
import sequelize from "../configs/database";

class Users extends Model {}

Users.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Users", // We need to choose the model name
    tableName: "users",
  }
);

export default Users;
