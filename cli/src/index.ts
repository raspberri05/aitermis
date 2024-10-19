#!/usr/bin/env node

import { command, exits, handleExit } from "./helpers";
import { help, config, clone, undef } from "./commands";

const cmd = command();

function run(func: any) {
    func();
    handleExit(0);
}

switch (cmd) {
    case undefined:
        run(undef);
        break;

    case "help":
        run(help);
        break;

    case "clone":
        clone(handleExit);
        break;

    case "config":
        run(config);
        break;

    default:
        exits("Invalid command provided.", 1);
        break;
}
