import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL?: string;
    previousLocationsURL?: string;
}

export function initState(): State {
    const commands = getCommands();
    const pokeAPI = new PokeAPI();
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
      await cmd.callback({
        readline: rl,
        commands: commands,
        pokeAPI: pokeAPI,
        nextLocationsURL: undefined,
        previousLocationsURL: undefined,
      });
    } catch (e) {
      console.log(e);
    }

    rl.prompt();
    });

    return {readline: rl,
      commands: commands,
      pokeAPI: new PokeAPI(),
      nextLocationsURL: undefined,
      previousLocationsURL: undefined
    };
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}