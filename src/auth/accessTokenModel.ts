import { RedisClient } from "redis";
import { UserController } from "../controllers/index";
import redis = require("redis");

const redisClient: RedisClient = redis.createClient();

class AccessTokenModel{

    static getClient(clientID: any, clientSecret: any, callback: Function){

        let grants: any = null;
        let redirectUris: any = null;
    
        const client = {
            clientID,
            clientSecret,
            grants: grants,
            redirectUris: redirectUris
        }
    
        callback(false, client);
    }

    static grantTypeAllowed(clientID: any, grantType: any, callback: Function){
        callback(false, true);    
    }
    
    static getAccount(username: string, password: string, callback: Function){
        UserController.getUserFromCredentials(username, password)
            .then(user => callback(false, user))
            .catch(error => callback(error, null));
    }

    static saveAccessToken(accessToken: any, clientID: any, expires: any, user: any, callback: Function){
        
        let token = {
            username: user.username,
            user_id: user.user_id,
            expires: expires
        }

        redisClient.setex(accessToken, 3600, JSON.stringify(token));
        callback(null);
    }

    static getAccessToken(bearerToken: any, callback: Function){

        redisClient.get(bearerToken, (err, session) => {
            if(err){
                callback(true, null); 
            }
            else{
                if(session === null){
                    callback(false, bearerToken);
                }
                else{
                    this.createAccessTokenFrom(session)
                        .then((accessToken: any) => {
                            callback(false, accessToken);
                        });
                }
            }
        });
    }

    static createAccessTokenFrom(session: any){

        let jsonSession = JSON.parse(session);

        return Promise.resolve({
            user:{
                if: jsonSession.username,
            },
            expires: jsonSession.expires
        });
    }
}

export { AccessTokenModel };


