import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { commandExplore } from "./command_explore.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack,
    },
    explore: {
    name: "explore <location_name>",
    description: "Explore the given location",
    callback: commandExplore,
    },
    catch: {
    name: "catch <pokemon_name>",
    description: "Catch Pokémon!",
    callback: commandCatch,
    },
    inspect: {
    name: "inspect <pokemon_name>",
    description: "Inspect caught Pokémons!",
    callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "List all caught Pokémon",
      callback: commandPokedex,
    },
  };
}
