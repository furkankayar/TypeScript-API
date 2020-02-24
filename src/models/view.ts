import { Config } from "../config/index";
import { User, Post } from "./index";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize: Sequelize = Config.getDatabase();

class View extends Model {
    public user_id!: number;
    public post_id!: number;
}

View.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},{
    sequelize: sequelize,
    tableName: '_view',
    timestamps: false
});

View.belongsTo(User, { as: "userId", foreignKey: "user_id" });
View.belongsTo(Post, { as: "postId", foreignKey: "post_id" });

module.exports = View;