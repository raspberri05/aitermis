#!/usr/bin/env node

import { command } from "./helpers/cmdparse";
import { clone } from "./commands/clone";
import { undef } from "./commands/undefined";
import { help } from "./commands/help";
import { def } from "./commands/default";

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

  default:
    def();
    handleExit(1);
    break;
}
