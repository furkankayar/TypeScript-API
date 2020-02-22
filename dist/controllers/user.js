"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/index");
const index_2 = require("../models/index");
var database = index_1.Config.getDatabase();
module.exports = () => {
    return {
        getUsername: getUsername,
        getInfo: getInfo,
        newUser: newUser
    };
};
function newUser(req, res) {
    let nickname = req.body.nickname;
    let name = req.body.name;
    if (nickname === undefined || name === undefined) {
        return res.status(400).json({ status: "Missing data", error: true });
    }
    index_2.User.create({
        nickname: nickname,
        name: name
    })
        .then((user) => {
        return res.status(200).json({ status: "success", error: false });
    })
        .catch((err) => {
        return res.status(500).json({ status: "Database error", error: err });
    });
}
function getUsername(req, res) {
    let userId = req.body.userId;
    index_2.User.findOne({
        where: {
            id: userId
        },
        raw: true
    })
        .then((user) => {
        res.status(200).json(user);
    })
        .catch((err) => {
        res.status(500).json(err);
    });
}
async function getInfo(req, res) {
    res.status(200).json({
        firstName: 'Furkan',
        lastName: 'Kayar',
        birthdate: '13.10.1998'
    });
}
//# sourceMappingURL=user.js.map