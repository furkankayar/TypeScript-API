"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const controllers = require("./controllers/index")();
const routes = require("./routes/index")(app, controllers);
exports.default = app;
//# sourceMappingURL=app.js.map