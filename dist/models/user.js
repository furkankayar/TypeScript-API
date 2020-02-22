"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/index");
const sequelize_1 = require("sequelize");
const sequelize = index_1.Config.getInstance().database;
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    nickname: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    }
}, {
    sequelize: sequelize,
    tableName: '_user',
    timestamps: false
});
module.exports = User;
//# sourceMappingURL=user.js.map