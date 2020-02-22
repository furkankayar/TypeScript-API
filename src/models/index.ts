import { Config } from "../config/index";
import { Sequelize } from "sequelize";

const sequelize = Config.getDatabase();
const User = require("./user");

sequelize.sync();

export { User };
