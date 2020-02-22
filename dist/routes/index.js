"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app, controllers) => {
    var userRoutes = require("./user")(app, controllers);
    return {
        userRoutes: userRoutes
    };
};
//# sourceMappingURL=index.js.map