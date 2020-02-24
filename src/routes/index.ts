import { Express } from "express";

module.exports = (app: Express) => {

    var userRoutes = require("./user")(app);

    return{
        userRoutes: userRoutes
    }
}