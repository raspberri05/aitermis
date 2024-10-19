import fs from "fs";
import { options } from "../helpers";
import os from "os";
const opts = options();

export default function config() {
    if (opts.length === 3) {
        if (opts[1] === "username" && opts[2]) {
            const fp = `${os.homedir()}/.qdev`;
            const username = opts[2];
            const content = `username: ${username}\n`;
            console.log(
                `adding github username ${username} to ${os.homedir()}/.qdev`,
            );
            try {
                fs.writeFileSync(fp, content);
            } catch (err) {
                console.error(err);
            }
        }
    }
}
