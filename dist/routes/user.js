"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app, controllers) => {
    app.get('/user/get_username', controllers.userController.getUsername);
    app.post('/user/get_userinfo', controllers.userController.getInfo);
};
//# sourceMappingURL=user.js.map