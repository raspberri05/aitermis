"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = command;
function command() {
    return process.argv.slice(2)[0];
}
