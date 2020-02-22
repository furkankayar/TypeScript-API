"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/index");
const sequelize = index_1.Config.getDatabase();
exports.sequelize = sequelize;
const User = require("./user");
exports.User = User;
if (process.env.NODE_ENV !== "TEST") {
    sequelize.sync();
}
//# sourceMappingURL=index.js.map