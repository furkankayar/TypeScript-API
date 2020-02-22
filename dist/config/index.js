"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
    }
    static getServer() {
        if (this.server === undefined) {
            this.server = require("./server");
        }
        return this.server;
    }
    static getDatabase() {
        if (this.database === undefined) {
            this.database = require("./database");
        }
        return this.database;
    }
}
exports.Config = Config;
if (process.env.NODE_ENV !== "TEST") {
    Config.getServer();
}
//# sourceMappingURL=index.js.map