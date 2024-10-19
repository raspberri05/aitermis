"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = undef;
const helpers_1 = require("../helpers");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function undef() {
    const titleFilPath = path_1.default.join(__dirname, "../data.json");
    const title = JSON.parse(fs_1.default.readFileSync(titleFilPath, "utf8"));
    (0, helpers_1.println)(title.title, "green");
    (0, helpers_1.println)(title.subtitle, "blue");
}
