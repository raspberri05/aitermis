#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");

const { command } = require("./cmdparse");
const { println, print } = require("./console");

const cmdsFilePath = path.join(__dirname, "commands.json");
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

const titleFilPath = path.join(__dirname, "readme.json");
const title = JSON.parse(fs.readFileSync(titleFilPath, "utf8"));

const cmd = command();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

switch (cmd) {
  case undefined:
    println(title.title);
    print(title.subtitle);
    rl.close();
    break;

  case "help":
    println("usage: q -[command]");
    print("commands:");
    cmds.commands.forEach((command) => {
      print(`  ${command.name} - ${command.description}`);
    });
    rl.close();
    break;

  case "clone":
    rl.question("Repository username/organization\n", (user) => {
      rl.question("Repository name\n", (name) => {
        const cloneProcess = spawn("git", [
          "clone",
          "https://github.com/raspberri05/persona.fm.git",
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
    print("invalid command");
}
