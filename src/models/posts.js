const { DataTypes, Deferrable } = require("sequelize");
import sequelize from "../configs/database";
import Users from "./users";
const Posts = sequelize.define(
  "Posts",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
  }
);

export default Posts;
