import { Config } from "../config/index";
import { Sequelize } from "sequelize";

const sequelize = Config.getInstance().database;
const User = require("./user");

sequelize.sync();

export { User };
