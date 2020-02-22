
module.exports = () => {
    
    var userController = require("./user")();

    return{
        userController: userController
    }
}