import { spawn } from "child_process";
import readline from "readline";
import { option } from "../helpers/optparse";
import { exits } from "../helpers/exits";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function clone(callback: (code: number) => void) {
    const opt = option();
    if (opt === undefined) {
        rl.question("Repository username/organization\n", (user: string) => {
            rl.question("Repository name\n", (name: string) => {
                const cloneProcess = spawn("git", [
                    "clone",
                    `https://github.com/${user}/${name}.git`,
                    "--progress",
                ]);

                const handleData = (data: any) => {
                    const output = data.toString();
                    readline.cursorTo(process.stdout, 0);
                    process.stdout.write(output);
                };

                cloneProcess.stdout.on("data", handleData);
                cloneProcess.stderr.on("data", handleData);

                cloneProcess.on("close", (code: number) => {
                    if (code !== 0) {
                        console.error(
                            `git clone process exited with code ${code}`,
                        );
                    }
                    rl.close();
                    callback(code);
                });
            });
        });
    } else {
        exits("Invalid option provided.", 1);
    }
}
