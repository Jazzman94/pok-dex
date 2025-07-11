import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
}

export function initState(): State {
    const commands = getCommands();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
      });
    
    rl.prompt();
    
    rl.on("line", async (input) => {
      const words = cleanInput(input);
      if (words.length === 0) {
        rl.prompt();
        return;
      }
    
    const commandName = words[0];
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }
    
    try {
      cmd.callback({readline: rl, commands });
    } catch (e) {
      console.log(e);
    }

    rl.prompt();
    });

    return {readline: rl,commands: commands};
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}