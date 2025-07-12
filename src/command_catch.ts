import { STATUS_CODES } from "http";
import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  const pokemon = await state.pokeAPI.fetchPokemon(args[0]);

  console.log(`Throwing a Pokeball at ${args[0]}...`);

  if (pokemon.base_experience < 1000 * Math.random()) {
    console.log(`${args[0]} was caught!`);
    state.pokedex.set(args[0], pokemon);
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}


