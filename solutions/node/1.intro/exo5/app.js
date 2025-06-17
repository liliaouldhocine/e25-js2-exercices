// Solution
const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "input.md");
const outputPath = path.join(__dirname, "output.html");

fs.readFile(inputPath, "utf8", (err, data) => {
  if (err) throw err;

  const html = data.replace(/^##\s(.+)$/gm, "<h2>$1</h2>");

  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log("Fichier HTML généré !");
  });
});
