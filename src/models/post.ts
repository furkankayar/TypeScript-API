import { Config } from "../config/index";
import { User } from "./index";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize: Sequelize = Config.getDatabase();

class Post extends Model {
    public post_id!: number;
    public user_id!: number;
    public topic!: string;
    public content!: string;
    public date!: Date;
}

Post.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    topic: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    content: {
        type: new DataTypes.STRING(500),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    }
}, {
    sequelize: sequelize,
    tableName: '_post',
    timestamps: false
});

Post.belongsTo(User, { as: 'userId', foreignKey: 'user_id' });

module.exports = Post;