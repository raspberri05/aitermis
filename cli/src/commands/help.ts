import { print, println, option } from "../helpers";
import fs from "fs";
import path from "path";

const opt = option();

const cmdsFilePath = path.join(__dirname, "../data.json");
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

export default function help() {
    if (opt === undefined) {
        println("qdev v1.1.0", "yellow");
        println("");
        cmds.commands.forEach((command: any) => {
            print(command.name, "blue");
            print(" - ");
            println(command.description);
        });
    } else {
        const command = cmds.commands.find((cmd: any) => cmd.name === opt);
        if (command) {
            if (command.options) {
                println(command.description, "green");
                println("");
                println("usage: ", "yellow");
                println(`${command.usage}`);
                println("");
                println("options: ", "yellow");
                command.options.forEach((option: any) => {
                    println(option.name, "blue");
                    print("  description: ");
                    println(option.description);
                    print("  example:     ");
                    println(option.example);
                });
            }
        } else {
            println(`command "${opt}" not found.`);
        }
    }
}
