"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/index");
const sequelize = index_1.Config.getInstance().database;
const User = require("./user");
exports.User = User;
sequelize.sync();
//# sourceMappingURL=index.js.map