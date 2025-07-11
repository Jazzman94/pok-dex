export function commandExit(states) {
    console.log("Closing the Pokedex... Goodbye!");
    states.readline.close();
    process.exit(0);
}
