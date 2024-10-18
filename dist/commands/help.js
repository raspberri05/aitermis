"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = help;
const console_1 = require("../helpers/console");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const optparse_1 = require("../helpers/optparse");
const opt = (0, optparse_1.option)();
const cmdsFilePath = path_1.default.join(__dirname, "../data/commands.json");
const cmds = JSON.parse(fs_1.default.readFileSync(cmdsFilePath, "utf8"));
function help() {
    if (opt === undefined) {
        (0, console_1.println)("qdev v1.1.0");
        cmds.commands.forEach((command) => {
            (0, console_1.print)(`${command.name} - ${command.description}`);
        });
    }
    else {
        const command = cmds.commands.find((cmd) => cmd.name === opt);
        if (command) {
            if (command.options) {
                (0, console_1.print)(command.description);
                (0, console_1.print)("");
                (0, console_1.print)(`usage: ${command.usage}`);
                (0, console_1.print)("");
                (0, console_1.print)("options:");
                command.options.forEach((option) => {
                    (0, console_1.print)(`     ${option.name} - ${option.description}`);
                });
            }
        }
        else {
            (0, console_1.println)(`command "${opt}" not found.`);
        }
    }
}
