import { Express } from "express";
import { Controllers } from "../controllers/interface";

module.exports = (app: Express, controllers: Controllers) => {

    app.post('/user/new_user', controllers.userController.newUser);
    app.get('/user/get_username', controllers.userController.getUsername);
    app.post('/user/get_userinfo', controllers.userController.getInfo);
}