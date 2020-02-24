import { UserController } from "../controllers/index";

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
    }
}

export { AccessTokenModel };


