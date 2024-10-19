import { spawn } from "child_process";
import readline from "readline";
import { option, exits } from "../helpers";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function cloneProc(uri: string, callback: (code: number) => void) {
    const cloneProcess = spawn("git", ["clone", uri, "--progress"]);

    const handleData = (data: any) => {
        const output = data.toString();
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(output);
    };

    cloneProcess.stdout.on("data", handleData);
    cloneProcess.stderr.on("data", handleData);

    cloneProcess.on("close", (code: number) => {
        if (code !== 0) {
            console.error(`git clone process exited with code ${code}`);
        }
        callback(code);
    });
}

export default function clone(callback: (code: number) => void) {
    const opt = option();
    let uri: string = "";
    if (opt === undefined) {
        rl.question("Repository username/organization\n", (user: string) => {
            rl.question("Repository name\n", (name: string) => {
                uri = `https://github.com/${user}/${name}.git`;
                rl.close();
                cloneProc(uri, callback);
            });
        });
    } else if (opt !== undefined) {
        uri = opt;
        cloneProc(uri, callback);
    } else {
        exits("Invalid option provided.", 1);
    }
}
