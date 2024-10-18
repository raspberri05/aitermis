import { println, print } from "../helpers/console";
import fs from "fs";
import path from "path";
import { option } from "../helpers/optparse";

const opt = option();

const cmdsFilePath = path.join(__dirname, "../data/commands.json");
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

export function help() {
    if (opt === undefined) {
        println("qdev v1.1.0");
        cmds.commands.forEach((command: any) => {
            print(`${command.name} - ${command.description}`);
        });
    } else {
        const command = cmds.commands.find((cmd: any) => cmd.name === opt);
        if (command) {
            if (command.options) {
                print(command.description);
                print("");
                print(`usage: ${command.usage}`);
                print("");
                print("options:");
                command.options.forEach((option: any) => {
                    print(`     ${option.name} - ${option.description}`);
                });
            }
        } else {
            println(`command "${opt}" not found.`);
        }
    }
}
