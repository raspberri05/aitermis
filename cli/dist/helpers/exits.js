"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exits = exits;
exports.handleExit = handleExit;
function exits(message, code) {
    console.error(message);
    process.exit(code);
}
function handleExit(code) {
    process.exit(code);
}
