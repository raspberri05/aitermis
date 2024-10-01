"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = clone;
const child_process_1 = require("child_process");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function clone(callback) {
    rl.question("Repository username/organization\n", (user) => {
        rl.question("Repository name\n", (name) => {
            const cloneProcess = (0, child_process_1.spawn)("git", [
                "clone",
                `https://github.com/${user}/${name}.git`,
                "--progress",
            ]);
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
                rl.close();
                callback(code);
            });
        });
    });
}
