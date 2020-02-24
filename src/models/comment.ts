import { Config } from "../config/index";
import { Post } from "./index";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize: Sequelize = Config.getDatabase();

class Comment extends Model {
    public comment_id!: number;
    public post_id!: number;
    public body!: string;
    public date!: Date;
}

Comment.init({
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    body: {
        type: new DataTypes.STRING(500),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    }
}, {
    sequelize: sequelize,
    tableName: '_comment',
    timestamps: false
});

Comment.belongsTo(Post, { as: 'postId', foreignKey: 'post_id' });

module.exports = Comment;