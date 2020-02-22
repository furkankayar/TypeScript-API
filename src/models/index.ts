import { Config } from "../config/index";
import { Sequelize } from "sequelize";

const sequelize = Config.getDatabase();
const User = require("./user");

if(process.env.NODE_ENV !== "TEST"){
    sequelize.sync();
}

export { User, sequelize };
