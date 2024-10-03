"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = help;
const console_1 = require("../helpers/console");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function help() {
    const cmdsFilePath = path_1.default.join(__dirname, "../data/commands.json");
    const cmds = JSON.parse(fs_1.default.readFileSync(cmdsFilePath, "utf8"));
    (0, console_1.println)("usage: q [command] [option]");
    (0, console_1.print)("commands:");
    cmds.commands.forEach((command) => {
        (0, console_1.print)(`  ${command.name} - ${command.description}`);
        if (command.option) {
            (0, console_1.println)(`          ${command.option.required ? "required" : "optional"}: ${command.option.name} - ${command.option.description}`);
        }
    });
}
