import { Request, Response } from "express";
import { Config } from "../config/index";
import { Sequelize } from "sequelize";
import { User } from "../models/index";

var database: Sequelize = Config.getDatabase();

module.exports = () => {

    return{
        getUsername: getUsername,
        getInfo: getInfo
    }
}

function getUsername(req: Request, res: Response){

    let userId = req.body.userId;

    User.findOne({
        where: {
            id: userId
        },
        raw: true 
    })
        .then((user: Object) => {
            res.status(200).json(user);
        })
        .catch((err: Object) => {
            res.status(500).json(err);
        });
}

async function getInfo(req: Request, res: Response){
    res.status(200).json(
        { 
            firstName: 'Furkan',
            lastName: 'Kayar',
            birthdate: '13.10.1998' 
        }
    );
}