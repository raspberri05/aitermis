import { option } from "../helpers/optparse";
import fs from "fs";
import path from "path";

export function env() {
    const opt = option();
    if (opt === undefined) {
        console.log("No option provided.");
    }
    if (opt === "create") {
        const envFilePath = path.join(process.cwd(), ".env");
        fs.writeFileSync(envFilePath, "");
        console.log("Creating .env");
    }
}
