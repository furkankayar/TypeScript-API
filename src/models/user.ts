import { Config } from "../config/index";
import { Sequelize, Model, DataTypes } from "sequelize";


const sequelize: Sequelize = Config.getDatabase();

class User extends Model {
    public user_id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public profile_image!: string;
    public is_active!: boolean;
}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    profile_image: {
        type: new DataTypes.STRING(128),
        defaultValue: 'http://localhost:8000/uploads/default.png'
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: sequelize,
    tableName: '_user',
    timestamps: false
});

module.exports = User;