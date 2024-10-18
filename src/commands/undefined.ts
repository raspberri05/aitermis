import { println } from "../helpers/console";
import fs from "fs";
import path from "path";

export function undef() {
    const titleFilPath = path.join(__dirname, "../data.json");
    const title = JSON.parse(fs.readFileSync(titleFilPath, "utf8"));
    println(title.title, "green");
    println(title.subtitle, "blue");
}
