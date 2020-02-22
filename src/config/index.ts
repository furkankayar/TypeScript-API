import { Server } from "http";
import { Sequelize } from "sequelize";

export class Config{
    private static server: Server;
    private static database: Sequelize;

    private constructor(){
    }

    static getServer(): Server{
        if(this.server === undefined){
            this.server = require("./server");
        }

        return this.server;
    }

    static getDatabase(): Sequelize{
        if(this.database === undefined){
            this.database = require("./database");
        }

        return this.database;
    }
}

if(process.env.NODE_ENV !== "TEST"){
    Config.getServer();
}


