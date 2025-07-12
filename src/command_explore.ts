import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  const location = await state.pokeAPI.fetchLocation(args[0]);

  console.log(`Exploring ${location.name}...`);
  console.log("Found Pokemon:")
  for (const pokemon of location.pokemon_encounters) {
    console.log(`- ${pokemon.pokemon.name}`);
  }
}


