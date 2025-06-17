// Solution
const args = process.argv.slice(2); // Ignore 'node' et le chemin du script
const nameIndex = args.findIndex((arg) => arg === "--name");
const name = nameIndex !== -1 ? args[nameIndex + 1] : "inconnu";

console.log(`Bonjour, ${name} !`);
