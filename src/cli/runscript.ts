import * as fs from "fs";
import * as readline from "readline";

import { Lox } from "../lox/lox";

export function runScript(lox: Lox, script_name: string) {
  const rl = readline.createInterface(fs.createReadStream(script_name));
  const lines: string[] = [];

  rl.on("line", (line) => {
    lines.push(line);
  });

  rl.on("close", () => {
    const allLines = lines.reduce((a: string, b: string) => {
      return `${a}\n${b}`;
    });
    lox.run(allLines);
  });
}
