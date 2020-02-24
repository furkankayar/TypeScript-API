import { Express } from "express";
import express = require("express");
import bodyParser = require("body-parser");
import { AccessTokenModel } from "./auth/accessTokenModel";
import { builtinModules } from "module";
import * as DbModels from "./models/index";


const app: any = express();
const oAuth2Server = require("node-oauth2-server");
const oauth2 = oAuth2Server({
    model: AccessTokenModel,
    grants: ['password'],
    debug: false
});
app.oauth = oauth2;
app.set("port", process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


const routes = require("./routes/index")(app);

app.use(app.oauth.errorHandler());

export { oauth2 };
export default app;