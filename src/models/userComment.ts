import { Config } from "../config/index";
import { User, Comment } from "./index";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize: Sequelize = Config.getDatabase();

class UserComment extends Model {
    public user_id!: number;
    public comment_id!: number;
}

UserComment.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
}, {
    sequelize: sequelize,
    tableName: '_user_comment',
    timestamps: false
});

UserComment.belongsTo(User, { as: 'userId', foreignKey: 'user_id' });
UserComment.belongsTo(Comment, { as: 'commentId', foreignKey: 'comment_id' });

module.exports = UserComment;