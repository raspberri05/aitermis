"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = option;
exports.options = options;
function option() {
    return process.argv.slice(2)[1];
}
function options() {
    return process.argv.slice(2);
}
