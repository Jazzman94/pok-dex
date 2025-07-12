import type { State } from "./state.js";

export async function commandExit(states: State) {
  console.log("Closing the Pokedex... Goodbye!");
  states.readline.close();
  process.exit(0);
}
