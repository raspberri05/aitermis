import { print, println, option } from "../helpers";
import { type Command, type CommandOption } from "../types";
import fs from "fs";
import path from "path";

const opt = option();

const cmdsFilePath = path.join(__dirname, "../data.json");
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

export default function help() {
    if (opt === undefined) {
        println("qdev v1.2.1", "yellow");
        println("");
        println(
            "type 'q help <command>' to get more information about a command",
        );
        println("");
        cmds.commands.forEach((command: Command) => {
            print(command.name, "blue");
            print(" - ");
            println(command.description);
        });
    } else {
        const command = cmds.commands.find((cmd: Command) => cmd.name === opt);
        if (command) {
            if (command.options) {
                println(command.description, "green");
                println("");
                println("usage: ", "yellow");
                println(`${command.usage}`);
                println("");
                println("options: ", "yellow");
                command.options.forEach((option: CommandOption) => {
                    println(option.name, "blue");
                    print("  description: ", "cyan");
                    println(option.description);
                    print("  example:     ", "cyan");
                    println(option.example);
                });
            }
        } else {
            println(`command "${opt}" not found.`);
        }
    }
}
