"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
const fs_1 = __importDefault(require("fs"));
const helpers_1 = require("../helpers");
const os_1 = __importDefault(require("os"));
const opts = (0, helpers_1.options)();
function config() {
    if (opts.length === 3) {
        if (opts[1] === "username" && opts[2]) {
            const fp = `${os_1.default.homedir()}/.qdev`;
            const username = opts[2];
            const content = `username: ${username}\n`;
            console.log(`adding github username ${username} to ${os_1.default.homedir()}/.qdev`);
            try {
                fs_1.default.writeFileSync(fp, content);
                (0, helpers_1.println)("done", "green");
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}
