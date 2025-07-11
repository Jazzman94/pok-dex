import { createInterface } from "readline";
import { getCommands } from "./commands.js";
export function initState() {
    const commands = getCommands();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    });
    rl.prompt();
    rl.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = words[0];
        const cmd = commands[commandName];
        if (!cmd) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`);
            rl.prompt();
            return;
        }
        try {
            cmd.callback({ readline: rl, commands });
        }
        catch (e) {
            console.log(e);
        }
        rl.prompt();
    });
    return { readline: rl, commands: commands };
}
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}
