"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = config;
const fs_1 = __importDefault(require("fs"));
const optparse_1 = require("../helpers/optparse");
const os_1 = __importDefault(require("os"));
const opts = (0, optparse_1.options)();
function config() {
    if (opts.length === 3) {
        if (opts[1] === "username" && opts[2]) {
            const fp = `${os_1.default.homedir()}/.qdev`;
            const username = opts[2];
            const content = `username: ${username}\n`;
            console.log(`adding github username ${username} to ${os_1.default.homedir()}/.qdev`);
            try {
                fs_1.default.writeFileSync(fp, content);
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}
