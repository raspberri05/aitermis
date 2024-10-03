"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exits = exits;
function exits(message, code) {
    console.error(message);
    process.exit(code);
}
