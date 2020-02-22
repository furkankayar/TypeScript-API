import { Config } from "../config/index";
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";


const sequelize: Sequelize = Config.getDatabase();

class User extends Model {
    public id!: number;
    public name!: string;
    public prefferedName!: string | null;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    nickname: {
        type: new DataTypes.STRING(128),
        allowNull: true
    }
}, {
    sequelize: sequelize,
    tableName: '_user',
    timestamps: false
});

module.exports = User;