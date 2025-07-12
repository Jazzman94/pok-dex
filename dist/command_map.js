export async function commandMap(states) {
    const locations = await states.pokeAPI.fetchLocations(states.nextLocationsURL);
    for (const location of locations.results) {
        console.log(`${location.name}`);
    }
    states.nextLocationsURL = locations.next;
    states.previousLocationsURL = locations.previous;
}
export async function commandMapB(states) {
    console.log();
    const locations = await states.pokeAPI.fetchLocations(states.previousLocationsURL);
    for (const location of locations.results) {
        console.log(`${location.name}`);
    }
    states.nextLocationsURL = locations.next;
    states.previousLocationsURL = locations.previous;
}
