"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.load;
exports.default = (function (callback) {
    console.log("" + process.env.URL);
    var db = mongoose_1.default.connect("" + process.env.URL);
    callback(db);
});
