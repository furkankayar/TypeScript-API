import { Express } from "express";
import { UserController } from "../controllers/index";
import { oauth2 } from "../app";

module.exports = (app: Express) => {

    app.post('/user/register', UserController.registerUser);
    app.get('/user/get_username', UserController.getUsername);
    app.post('/user/get_userinfo', UserController.getInfo);
}