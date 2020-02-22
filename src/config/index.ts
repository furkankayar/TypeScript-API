import { Server } from "http";
import { Sequelize } from "sequelize";

interface IConfig{
    server: Server;
    database: Sequelize;
}

export class Config{
    private static server: Server;
    private static database: Sequelize;

    private constructor(){
    }

    static getInstance(): IConfig{
        if(this.server === undefined){
            this.server = require("./server");
        }
        if(this.database === undefined){
            this.database = require("./database");
        }

        return {
            server: this.server,
            database: this.database
        }
    }
}

export { IConfig };
Config.getInstance();

