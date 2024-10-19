"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = help;
const helpers_1 = require("../helpers");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const opt = (0, helpers_1.option)();
const cmdsFilePath = path_1.default.join(__dirname, "../data.json");
const cmds = JSON.parse(fs_1.default.readFileSync(cmdsFilePath, "utf8"));
function help() {
    if (opt === undefined) {
        (0, helpers_1.println)("qdev v1.2.1", "yellow");
        (0, helpers_1.println)("");
        (0, helpers_1.println)("type 'q help <command>' to get more information about a command");
        (0, helpers_1.println)("");
        cmds.commands.forEach((command) => {
            (0, helpers_1.print)(command.name, "blue");
            (0, helpers_1.print)(" - ");
            (0, helpers_1.println)(command.description);
        });
    }
    else {
        const command = cmds.commands.find((cmd) => cmd.name === opt);
        if (command) {
            if (command.options) {
                (0, helpers_1.println)(command.description, "green");
                (0, helpers_1.println)("");
                (0, helpers_1.println)("usage: ", "yellow");
                (0, helpers_1.println)(`${command.usage}`);
                (0, helpers_1.println)("");
                (0, helpers_1.println)("options: ", "yellow");
                command.options.forEach((option) => {
                    (0, helpers_1.println)(option.name, "blue");
                    (0, helpers_1.print)("  description: ", "cyan");
                    (0, helpers_1.println)(option.description);
                    (0, helpers_1.print)("  example:     ", "cyan");
                    (0, helpers_1.println)(option.example);
                });
            }
        }
        else {
            (0, helpers_1.println)(`command "${opt}" not found.`);
        }
    }
}
