// Solution
const fs = require("fs");
const { Transform } = require("stream");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

fs.createReadStream("input.txt")
  .on("error", (err) => console.error("Erreur de lecture :", err))
  .pipe(uppercase)
  .pipe(fs.createWriteStream("output.txt"))
  .on("error", (err) => console.error("Erreur d'écriture :", err))
  .on("finish", () => console.log("Terminé !"));
