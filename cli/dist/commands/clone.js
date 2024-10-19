"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = clone;
const child_process_1 = require("child_process");
const readline_1 = __importDefault(require("readline"));
const helpers_1 = require("../helpers");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function cloneProc(uri, callback) {
    const cloneProcess = (0, child_process_1.spawn)("git", ["clone", uri, "--progress"]);
    const handleData = (data) => {
        const output = data.toString();
        readline_1.default.cursorTo(process.stdout, 0);
        process.stdout.write(output);
    };
    cloneProcess.stdout.on("data", handleData);
    cloneProcess.stderr.on("data", handleData);
    cloneProcess.on("close", (code) => {
        if (code !== 0) {
            console.error(`git clone process exited with code ${code}`);
        }
        callback(code);
    });
}
function clone(callback) {
    const opt = (0, helpers_1.option)();
    let uri = "";
    if (opt === undefined) {
        rl.question("Repository username/organization\n", (user) => {
            rl.question("Repository name\n", (name) => {
                uri = `https://github.com/${user}/${name}.git`;
                rl.close();
                cloneProc(uri, callback);
            });
        });
    }
    else if (opt !== undefined) {
        uri = opt;
        cloneProc(uri, callback);
    }
    else {
        (0, helpers_1.exits)("Invalid option provided.", 1);
    }
}
