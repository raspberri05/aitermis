"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = env;
const optparse_1 = require("../helpers/optparse");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function env() {
    const opt = (0, optparse_1.option)();
    if (opt === undefined) {
        console.log("No option provided.");
    }
    if (opt === "create") {
        const envFilePath = path_1.default.join(process.cwd(), ".env");
        fs_1.default.writeFileSync(envFilePath, "");
        console.log("Creating .env");
    }
}
