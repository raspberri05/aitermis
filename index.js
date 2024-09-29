#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { command } = require("./cmdparse");
const { println, print } = require("./console");

const cmdsFilePath = path.join(__dirname, "commands.json");
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

const titleFilPath = path.join(__dirname, "readme.json");
const title = JSON.parse(fs.readFileSync(titleFilPath, "utf8"));

const cmd = command();

switch (cmd) {
  case undefined:
    println(title.title);
    print(title.subtitle);
    break;

  case "help":
    println("usage: q -[command]");
    print("commands:");
    cmds.commands.forEach((command) => {
      print(`  ${command.name} - ${command.description}`);
    });
    break;

  default:
    print("invalid command");
    break;
}
