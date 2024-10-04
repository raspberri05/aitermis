#!/usr/bin/env node

import { exits } from "./helpers/exits";
import { command } from "./helpers/cmdparse";
import { clone } from "./commands/clone";
import { undef } from "./commands/undefined";
import { help } from "./commands/help";
import { env } from "./commands/env";

const cmd = command();

function handleExit(code: number) {
    process.exit(code);
}

switch (cmd) {
    case undefined:
        undef();
        handleExit(0);
        break;

    case "help":
        help();
        handleExit(0);
        break;

    case "clone":
        clone(handleExit);
        break;

    case "env":
        env();
        handleExit(0);
        break;
        
    default:
        exits("Invalid command provided.", 1);
        break;
}
