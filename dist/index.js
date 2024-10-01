#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");
const cmdparse_1 = require("./cmdparse");
const console_1 = require("./console");
const cmdsFilePath = path.join(__dirname, "commands.json");
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));
const titleFilPath = path.join(__dirname, "readme.json");
const title = JSON.parse(fs.readFileSync(titleFilPath, "utf8"));
const cmd = (0, cmdparse_1.command)();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
switch (cmd) {
  case undefined:
    (0, console_1.println)(title.title);
    (0, console_1.print)(title.subtitle);
    rl.close();
    break;
  case "help":
    (0, console_1.println)("usage: q -[command]");
    (0, console_1.print)("commands:");
    cmds.commands.forEach((command) => {
      (0, console_1.print)(`  ${command.name} - ${command.description}`);
    });
    rl.close();
    break;
  case "clone":
    rl.question("Repository username/organization\n", (user) => {
      rl.question("Repository name\n", (name) => {
        const cloneProcess = spawn("git", [
          "clone",
          `https://github.com/${user}/${name}.git`,
          "--progress",
        ]);
        const handleData = (data) => {
          const output = data.toString();
          readline.cursorTo(process.stdout, 0);
          process.stdout.write(output);
        };
        cloneProcess.stdout.on("data", handleData);
        cloneProcess.stderr.on("data", handleData);
        cloneProcess.on("close", (code) => {
          if (code !== 0) {
            console.error(`git clone process exited with code ${code}`);
          }
        });
        rl.close();
      });
    });
    break;
  default:
    (0, console_1.print)("invalid command");
}
