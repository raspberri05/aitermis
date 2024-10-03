#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exits_1 = require("./helpers/exits");
const cmdparse_1 = require("./helpers/cmdparse");
const clone_1 = require("./commands/clone");
const undefined_1 = require("./commands/undefined");
const help_1 = require("./commands/help");
const cmd = (0, cmdparse_1.command)();
function handleExit(code) {
    process.exit(code);
}
switch (cmd) {
    case undefined:
        (0, undefined_1.undef)();
        handleExit(0);
        break;
    case "help":
        (0, help_1.help)();
        handleExit(0);
        break;
    case "clone":
        (0, clone_1.clone)(handleExit);
        break;
    default:
        (0, exits_1.exits)("Invalid command provided.", 1);
        break;
}
