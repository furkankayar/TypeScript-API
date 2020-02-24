import { Config } from "../config/index";
import { Sequelize } from "sequelize";

const sequelize = Config.getDatabase();
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const UserComment = require("./userComment");
const View = require("./view");
const Vote = require("./vote");

if(process.env.NODE_ENV !== "TEST"){
    sequelize.sync();
}

export { User, Post, Comment, UserComment, View, Vote, sequelize };
