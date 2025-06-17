// Solution
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "texte.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture :", err);
    return;
  }
  const wordCount = data.split(/\s+/).filter((word) => word !== "").length;
  console.log(`Nombre de mots : ${wordCount}`);
});
