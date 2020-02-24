import { Express } from "express";
import { UserController } from "../controllers/index";
import { oauth2 } from "../app";

module.exports = (app: Express) => {

    app.post('/user/new_user', oauth2.authorise(), UserController.newUser);
    app.get('/user/get_username', UserController.getUsername);
    app.post('/user/get_userinfo', UserController.getInfo);
}