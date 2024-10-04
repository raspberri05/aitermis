import { println, print } from "../helpers/console";
import fs from "fs";
import path from "path";

export function help() {
    const cmdsFilePath = path.join(__dirname, "../data/commands.json");
    const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

    println("usage: q [command] [option]");
    print("commands:");
    cmds.commands.forEach((command: any) => {
        print(`  ${command.name} - ${command.description}`);
        if (command.option) {
            print(`    parameters:`);
            print(
                `      ${command.option.name} - ${command.option.description} (${command.option.required ? "required" : "optional"})`,
            );
            if (command.option.allowedValues) {
                print(
                    `        allowed values: ${command.option.allowedValues.join(", ")}`,
                );
            }
        }
    });
}
