#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const commands_1 = require("./commands");
const cmd = (0, helpers_1.command)();
function run(func) {
    func();
    (0, helpers_1.handleExit)(0);
}
switch (cmd) {
    case undefined:
        run(commands_1.undef);
        break;
    case "help":
        run(commands_1.help);
        break;
    case "clone":
        (0, commands_1.clone)(helpers_1.handleExit);
        break;
    case "config":
        run(commands_1.config);
        break;
    default:
        (0, helpers_1.exits)("Invalid command provided.", 1);
        break;
}
