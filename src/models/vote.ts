import { Config } from "../config/index";
import { User, Post } from "./index";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize: Sequelize = Config.getDatabase();

class Vote extends Model {
    public user_id!: number;
    public post_id!: number;
    public value!: number;
}

Vote.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    sequelize: sequelize,
    tableName: '_vote',
    timestamps: false
});

Vote.belongsTo(User, { as: "userId", foreignKey: "user_id" });
Vote.belongsTo(Post, { as: "postId", foreignKey: "post_id" });

module.exports = Vote;
