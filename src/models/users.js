const { DataTypes } = require("sequelize");
import sequelize from "../configs/database";

const Users = sequelize.define(
  "Users",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Model attributes are defined here
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

export default Users;
