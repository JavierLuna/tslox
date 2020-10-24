import * as readline from "readline";
import { Lox } from "../lox/lox";

const PROMPT = "> ";

export function runREPl(lox: Lox) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function processLine(line: string) {
    if (line === "") {
      rl.close();
      return;
    }

    lox.run(line);

    rl.question(PROMPT, processLine);
  }

  rl.question(PROMPT, processLine);

  rl.on("close", function () {
    process.exit(0);
  });
}
