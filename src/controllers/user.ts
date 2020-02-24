import { Request, Response } from "express";
import { compareSync } from "bcrypt";
import { User } from "../models/index";


class UserController{
    
    static newUser(req: Request, res: Response): any{

        let nickname = req.body.nickname;
        let name = req.body.name;
    
        if(nickname === undefined || name === undefined){
            return res.status(400).json({ status: "Missing data", error: true });
        }
    
        User.create({
            nickname: nickname,
            name: name
        })
            .then((user: Object) => {
                return res.status(200).json({ status: "success", error: false });
            })
            .catch((err: Object) => {
                return res.status(500).json({ status: "Database error", error: true }); 
            });
    }
    
    static getUsername(req: Request, res: Response): any{
    
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
    
    static async getInfo(req: Request, res: Response){
        res.status(200).json(
            { 
                firstName: 'Furkan',
                lastName: 'Kayar',
                birthdate: '13.10.1998' 
            }
        );
    }

    static async getUserFromCredentials(username: string, password: string){
        let user = await User.findOne({
            where: {
                username: username
            }
        });
        
        if(user !== null && compareSync(username + password, user.password)){
            return user;
        }

        return null;
    }
}



export { UserController };