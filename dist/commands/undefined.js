"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.undef = undef;
const console_1 = require("../helpers/console");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function undef() {
    const titleFilPath = path_1.default.join(__dirname, "../data/readme.json");
    const title = JSON.parse(fs_1.default.readFileSync(titleFilPath, "utf8"));
    (0, console_1.println)(title.title);
    (0, console_1.print)(title.subtitle);
}
