import { CLICommand, type State } from "./state.js";

export async function commandHelp(states: State) {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const cmd of Object.values(states.commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
  }
  console.log();
}
