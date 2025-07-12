import { STATUS_CODES } from "http";
import type { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";

export async function commandInspect(state: State, ...args: string[]) {
  const pokemon = state.pokedex.get(args[0]);
  if (!pokemon) {
    console.log(`Pokémon ${args[0]} not found in your Pokédex.`);
    return;
  }
  console.log(`Name: ${args[0]}`)
  console.log(`Height: ${pokemon.height}`)
  console.log(`Weight: ${pokemon.weight}`);
  console.log(`Base Experience: ${pokemon.base_experience}`);
  console.log("Stats:")
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    }   
  console.log("Types:")
  for (const type of pokemon.types) {
    console.log(`  - ${type.type.name}`);
  }
}


