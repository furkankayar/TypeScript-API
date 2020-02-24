import { Request, Response } from "express";
import { compareSync, hashSync } from "bcrypt";
import { randomBytes } from "crypto";
import { RedisClient } from "redis";
import { createTransport } from "nodemailer";
import redis = require("redis");
import { User } from "../models/index";
import { SendResponse, IsString } from "../utility";


const redisClient: RedisClient = redis.createClient();

class UserController{
    
    static async registerUser(req: Request, res: Response){
        
        let username: any = req.body.username;
        let password: any = req.body.password;
        let email: any = req.body.email;

        if(!IsString(username) || !IsString(password) || !IsString(email)){
            return SendResponse(400, res, "missing credentials", true);
        }

        try{
            let hash: string = hashSync(username + password, 10);
            await User.create({
                username: username,
                password: hash,
                email: email
            });
        }
        catch(err){
            return SendResponse(500, res, err, true);
        }

        let token: string = randomBytes(50).toString("hex");
        let store = JSON.stringify({
            username: username,
            email: email
        });

        redisClient.select(1, (err, resp) => {
            redisClient.setex(token, 3600000, store);
        });
        
        const transporter = createTransport({
            service: 'Gmail',
            auth: {
                user: 'dbms.info.test@gmail.com',
                pass: '123123123Db'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: 'dbms.info.test@gmail.com',
            to: `${email}`, 
            subject: `Account activation`,
            text: `Click link to activate your account: http://localhost:8080/validation/${token}\n`
        }

        try{
            await transporter.sendMail(mailOptions, (err, resp) => {
                if(err){
                    return SendResponse(200, res, "email error", true);
                }
                else{
                    return SendResponse(200, res, "success", false);
                }
            });
        }
        catch(err){
            return SendResponse(200, res, "email error", true);
        }
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