import type { State } from "./state.js";

export async function commandPokedex(state: State) {
    console.log("Your Pokédex contains the following Pokémon:");
    for (const [name, pokemon] of state.pokedex) {
        console.log(` - ${name}`);
    }
}