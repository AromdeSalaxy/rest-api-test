const { DataTypes, Model, Deferrable } = require("sequelize");
import sequelize from "../configs/database";
import Users from "./users";

class Posts extends Model {}

Posts.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: Users,
        // This is the column name of the referenced model
        key: "id",
        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      },
    },
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Posts", // We need to choose the model name
    tableName: "posts",
  }
);

export default Posts;
