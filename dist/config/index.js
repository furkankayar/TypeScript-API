"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
    }
    static getInstance() {
        if (this.server === undefined) {
            this.server = require("./server");
        }
        if (this.database === undefined) {
            this.database = require("./database");
        }
        return {
            server: this.server,
            database: this.database
        };
    }
}
exports.Config = Config;
Config.getInstance();
//# sourceMappingURL=index.js.map