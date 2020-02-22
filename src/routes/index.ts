import { Express } from "express";
import { Controllers } from "../controllers/interface";

module.exports = (app: Express, controllers: Controllers) => {

    var userRoutes = require("./user")(app, controllers);

    return{
        userRoutes: userRoutes
    }
}