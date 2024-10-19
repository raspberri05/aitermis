import { println } from "../helpers";
import fs from "fs";
import path from "path";

export default function undef() {
    const titleFilPath = path.join(__dirname, "../data.json");
    const title = JSON.parse(fs.readFileSync(titleFilPath, "utf8"));
    println("         _         ", "cyan");
    println(" __ _ __| |_____ __", "cyan");
    println("/ _` / _` / -_) V /", "cyan");
    println("\\__, \\__,_\\___|\\_/ ", "cyan");
    println("   |_|             ", "cyan");
    println("");
    println(title.title, "green");
    println("");
    println(title.subtitle, "blue");
}
