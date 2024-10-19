import fs from "fs";
import path from "path";

// Define the path to the commands.json file
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const cmdsFilePath = path.join(__dirname, "./src/data.json");

// Read and parse the commands.json file
const cmds = JSON.parse(fs.readFileSync(cmdsFilePath, "utf8"));

const readmeFilePath = path.join(__dirname, "./docs.md");

let readmeContent = "### Available Commands\n\n";

cmds.commands.forEach((command) => {
    readmeContent += `#### **${command.name}**\n`;
    readmeContent += `${command.description}\n\n`;
    if (command.usage) {
        readmeContent += `*Usage:* \`${command.usage}\`\n\n`;
    }
    if (command.options) {
        readmeContent += `*Options:*\n\n`;
        command.options.forEach((option) => {
            readmeContent += `- ${option.name}: ${option.description}\n`;
            if (option.example) {
                readmeContent += `  - Example: \`${option.example}\`\n`;
            }
        });
        readmeContent += `\n`;
    }
});

// Write the README content to the README.md file
fs.writeFileSync(readmeFilePath, readmeContent);

console.log("README.md has been generated successfully.");
