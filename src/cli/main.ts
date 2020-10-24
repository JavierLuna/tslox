#!/usr/bin/env node
import { Command } from "commander";

import { Lox } from "../lox/lox";
import { runREPl } from "./repl";
import { runScript } from "./runscript";

function main(script_name: string | undefined) {
	const lox = new Lox();
  if (script_name) {
    runScript(lox, script_name);
  } else {
    runREPl(lox);
  }
}

const program = new Command();
program.version("0.0.1").arguments("[script]").action(main).parse(process.argv);
