import { createInterface } from "readline";
export function cleanInput(input) {
    return input.trim().toLowerCase().split(/\s+/);
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });
    rl.prompt();
    rl.on('line', (line) => {
        const input = cleanInput(line);
        console.log(`Your command was: ${input[0]}`);
        rl.prompt();
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
}
