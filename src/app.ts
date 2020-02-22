import express = require("express");
import bodyParser = require("body-parser");
import { builtinModules } from "module";
import * as DbModels from "./models/index";

const app = express();
app.set("port", process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const controllers: Object = require("./controllers/index")();
const routes = require("./routes/index")(app, controllers);



export default app;